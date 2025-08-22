# 🌐 WordPress Domain → Netlify Setup Guide

## 🎯 **Goal**: Point your WordPress domain to your Netlify site

### **✅ Prerequisites:**

- ✅ Site successfully deployed on Netlify
- ✅ WordPress domain purchased and active
- ✅ Access to WordPress domain management

---

## 🚀 **Method 1: DNS Records (Recommended)**

### **Step 1: Netlify Configuration**

1. **Netlify Dashboard** → **Site Settings** → **Domain Management**
2. **Add custom domain**: `yourdomain.com`
3. **Note**: Netlify will show DNS configuration instructions

### **Step 2: WordPress Domain DNS**

**Location**: WordPress.com → My Sites → Manage → Domains → Your Domain → DNS

**Add these records:**

```
Type: A
Name: @ (or root)
Points to: 75.2.60.5

Type: CNAME
Name: www
Points to: your-site-name.netlify.app
```

### **Step 3: Verification**

- **Wait**: 24-48 hours for DNS propagation
- **Test**: Visit your domain to see your site
- **SSL**: Netlify auto-generates SSL certificate

---

## 🔄 **Method 2: Nameserver Change (Easiest)**

### **Step 1: Get Netlify Nameservers**

1. **Netlify** → **DNS Panel** → **Copy nameservers**
2. **Usually 4 addresses** like:
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```

### **Step 2: Update WordPress Domain**

1. **WordPress.com** → **Domains** → **Your Domain**
2. **Find "Nameservers"** or **"DNS Management"**
3. **Replace with Netlify nameservers**
4. **Save changes**

### **Step 3: Complete Setup**

- **Netlify handles everything**: DNS, SSL, redirects
- **Faster propagation**: Usually 2-6 hours
- **Full control**: All DNS managed by Netlify

---

## 📋 **Domain Migration Checklist**

### **Before Starting:**

- [ ] **Backup current site** (if any)
- [ ] **Note current DNS settings** (for rollback)
- [ ] **Prepare for 24-48 hour downtime** (during propagation)

### **During Setup:**

- [ ] **Add domain to Netlify**
- [ ] **Configure DNS records** or **change nameservers**
- [ ] **Verify SSL certificate** generation

### **After Setup:**

- [ ] **Test all pages** work correctly
- [ ] **Check mobile responsiveness**
- [ ] **Verify forms function** properly
- [ ] **Test SSL certificate** (https://)
- [ ] **Check redirects** work (www → non-www)

---

## 🆘 **Troubleshooting**

### **Domain not working after 48 hours:**

1. **Check DNS propagation**: Use dns-checker.org
2. **Verify DNS records**: Double-check A and CNAME records
3. **Clear browser cache**: Hard refresh (Ctrl+F5)
4. **Contact support**: WordPress or Netlify support

### **SSL certificate issues:**

1. **Force HTTPS**: Enable in Netlify settings
2. **Regenerate certificate**: Delete and re-add domain
3. **Wait longer**: SSL can take 24-48 hours

### **Emails not working:**

1. **Keep MX records**: Don't change email-related DNS
2. **WordPress email**: May need separate email hosting
3. **Contact WordPress**: For email configuration help

---

## 🎯 **Expected Timeline**

### **Immediate (0-2 hours):**

- ✅ Domain added to Netlify
- ✅ DNS records configured
- ⏳ Waiting for propagation

### **2-6 hours:**

- ✅ DNS changes start working
- ✅ Some visitors see new site
- ⏳ SSL certificate generating

### **24-48 hours:**

- ✅ Full global propagation
- ✅ SSL certificate active
- ✅ All visitors see new site
- ✅ Perfect performance

---

## 📞 **Support Contacts**

### **Netlify Issues:**

- **Netlify Support**: https://netlify.com/support
- **Documentation**: https://docs.netlify.com

### **WordPress Domain Issues:**

- **WordPress Support**: WordPress.com support chat
- **Domain Help**: WordPress.com domain documentation

### **DNS Issues:**

- **Check propagation**: https://dnschecker.org
- **Verify records**: https://mxtoolbox.com

---

## 🎉 **Success Indicators**

**You'll know it's working when:**

- ✅ **Your domain loads** your Netlify site
- ✅ **SSL certificate** shows secure (🔒)
- ✅ **All pages work** with your domain
- ✅ **Mobile optimized** performance
- ✅ **Forms and links** function correctly

**Your iCreative Learning site will be live on your WordPress domain!** 🚀
