import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface FormData {
  childName: string;
  phoneNumber: string;
  emailAddress: string;
  parentName: string;
  childGrade: string;
  selectedPrograms: string[];
  hearAboutUs: string;
}

const programs = [
  { id: "cogat", name: "Cognitive Abilities Test (CogAT)", price: 120 },
  { id: "cognitive-math", name: "Cognitive Math", price: 120 },
  {
    id: "english-literature-arts",
    name: "English Literature & Arts",
    price: 120,
  },
  { id: "abacus", name: "Abacus Mastery (Mental Arithmetic)", price: 120 },
];

const hearAboutOptions = [
  "Google Search",
  "Social Media",
  "Friend/Family Referral",
  "School Recommendation",
  "Advertisement",
  "Other",
];

export default function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    childName: "",
    phoneNumber: "",
    emailAddress: "",
    parentName: "",
    childGrade: "",
    selectedPrograms: [],
    hearAboutUs: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProgramChange = (programId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedPrograms: prev.selectedPrograms.includes(programId)
        ? prev.selectedPrograms.filter((id) => id !== programId)
        : [...prev.selectedPrograms, programId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit form data to your backend
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Add selected programs to cart
        const selectedProgramDetails = programs.filter((program) =>
          formData.selectedPrograms.includes(program.id),
        );

        // Store cart items in localStorage for now
        localStorage.setItem(
          "cartItems",
          JSON.stringify(selectedProgramDetails),
        );

        alert(
          "Registration successful! Your selected programs have been added to cart.",
        );

        // Redirect to cart or confirmation page
        navigate("/cart");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your registration. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-icreative-pink-light scroll-smooth">
      <Header />

      <main className="py-12 lg:py-16 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto">
          {/* Logo Section */}
          <div className="text-center mb-8 lg:mb-12">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d39d1a44c601b6f86affe2855a69fde28f72777c?width=200"
              alt="iCreative Learning Logo"
              className="h-14 lg:h-16 w-auto mx-auto mb-6 lg:mb-8"
            />
          </div>

          {/* Page Title */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4">
              Registration
            </h1>
            <p className="text-black font-roboto text-sm lg:text-base xl:text-lg max-w-3xl mx-auto leading-relaxed">
              Register here to receive iCreative Learning Program Curriculum and
              Demo Class
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-transparent">
            {/* Parent's Full Name */}
            <div className="space-y-2">
              <label
                htmlFor="parentName"
                className="block text-black font-roboto text-base lg:text-lg font-medium"
              >
                Parent's Full Name
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 text-black font-roboto text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-icreative-purple"
                placeholder="Text Here"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label
                htmlFor="emailAddress"
                className="block text-black font-roboto text-base lg:text-lg font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 text-black font-roboto text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-icreative-purple"
                placeholder="Text Here"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label
                htmlFor="phoneNumber"
                className="block text-black font-roboto text-base lg:text-lg font-medium"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 text-black font-roboto text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-icreative-purple"
                placeholder="Text Here"
              />
            </div>

            {/* Child's Name */}
            <div className="space-y-2">
              <label
                htmlFor="childName"
                className="block text-black font-roboto text-base lg:text-lg font-medium"
              >
                Child's Name
              </label>
              <input
                type="text"
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 text-black font-roboto text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-icreative-purple"
                placeholder="Text Here"
              />
            </div>

            {/* Child's Grade */}
            <div className="space-y-2">
              <label
                htmlFor="childGrade"
                className="block text-black font-roboto text-base lg:text-lg font-medium"
              >
                Child's Grade
              </label>
              <input
                type="text"
                id="childGrade"
                name="childGrade"
                value={formData.childGrade}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 text-black font-roboto text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-icreative-purple"
                placeholder="Text Here"
              />
            </div>

            {/* Program Selection */}
            <div className="space-y-4">
              <h3 className="text-black font-roboto text-base lg:text-lg font-medium">
                Select the program?
              </h3>
              <div className="space-y-3">
                {programs.map((program) => (
                  <label
                    key={program.id}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.selectedPrograms.includes(program.id)}
                      onChange={() => handleProgramChange(program.id)}
                      className="w-5 h-5 border-2 border-gray-400 rounded cursor-pointer focus:ring-2 focus:ring-icreative-purple"
                    />
                    <span className="text-black font-roboto text-base lg:text-lg">
                      {program.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* How Did You Hear About Us */}
            <div className="space-y-2">
              <label
                htmlFor="hearAboutUs"
                className="block text-black font-roboto text-base lg:text-lg font-medium"
              >
                How Did you hear about us?
              </label>
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 text-black font-roboto text-base bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-icreative-purple"
              >
                <option value="">Select an option</option>
                {hearAboutOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Privacy Notice */}
            <div className="bg-white/40 p-6 rounded-lg border border-gray-300">
              <p className="text-black font-roboto text-sm lg:text-base leading-relaxed">
                By submitting your information, you're giving us permission to
                email you. You may unsubscribe at any time.
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-icreative-green text-black px-8 py-3 rounded-lg font-roboto text-base font-bold hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
