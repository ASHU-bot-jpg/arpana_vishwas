import { RequestHandler } from "express";
import { z } from "zod";

// Validation schema
const registrationSchema = z.object({
  childName: z.string().min(1, "Child's name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  emailAddress: z.string().email("Valid email address is required"),
  parentName: z.string().min(1, "Parent's name is required"),
  childGrade: z.string().min(1, "Child's grade is required"),
  selectedPrograms: z.array(z.string()).min(1, "At least one program must be selected"),
  hearAboutUs: z.string().min(1, "Please tell us how you heard about us")
});

// Store registrations in memory (in a real app, use a database)
let registrations: any[] = [];

export const handleRegistration: RequestHandler = async (req, res) => {
  try {
    // Validate request data
    const validatedData = registrationSchema.parse(req.body);
    
    // Add timestamp and ID
    const registration = {
      id: Date.now().toString(),
      ...validatedData,
      submittedAt: new Date().toISOString(),
      ipAddress: req.ip || req.connection.remoteAddress
    };

    // Store registration
    registrations.push(registration);

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with your CRM

    console.log('New registration received:', registration);

    // Send email notification (you'll need to implement this)
    await sendEmailNotification(registration);

    res.status(200).json({
      success: true,
      message: "Registration successful",
      registrationId: registration.id
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  }
};

// Export registrations (for CSV download)
export const exportRegistrations: RequestHandler = (req, res) => {
  try {
    // Convert to CSV format
    const csvHeaders = [
      'ID',
      'Child Name',
      'Parent Name',
      'Email',
      'Phone',
      'Child Grade',
      'Selected Programs',
      'How They Heard About Us',
      'Submitted At'
    ];

    const csvRows = registrations.map(reg => [
      reg.id,
      reg.childName,
      reg.parentName,
      reg.emailAddress,
      reg.phoneNumber,
      reg.childGrade,
      reg.selectedPrograms.join('; '),
      reg.hearAboutUs,
      reg.submittedAt
    ]);

    const csvContent = [
      csvHeaders.join(','),
      ...csvRows.map(row => row.map(field => `"${field}"`).join(','))
    ].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=registrations.csv');
    res.send(csvContent);

  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({
      success: false,
      message: "Export failed"
    });
  }
};

// Email notification function (implement with your preferred email service)
async function sendEmailNotification(registration: any) {
  // Example email content
  const emailContent = `
    New Registration Received!
    
    Child's Name: ${registration.childName}
    Parent's Name: ${registration.parentName}
    Email: ${registration.emailAddress}
    Phone: ${registration.phoneNumber}
    Child's Grade: ${registration.childGrade}
    Selected Programs: ${registration.selectedPrograms.join(', ')}
    How they heard about us: ${registration.hearAboutUs}
    
    Submitted at: ${registration.submittedAt}
  `;

  console.log('Email to be sent to info@icreativelearning.com:', emailContent);

  // Here you would integrate with an email service like:
  // - Nodemailer with SMTP
  // - SendGrid
  // - Amazon SES
  // - Mailgun
  // etc.

  /* Example with Nodemailer:
  
  const nodemailer = require('nodemailer');
  
  const transporter = nodemailer.createTransporter({
    host: 'your-smtp-host',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@domain.com',
      pass: 'your-password'
    }
  });

  await transporter.sendMail({
    from: 'noreply@icreativelearning.com',
    to: 'info@icreativelearning.com',
    subject: 'New Registration - iCreative Learning',
    text: emailContent,
    html: emailContent.replace(/\n/g, '<br>')
  });
  */
}
