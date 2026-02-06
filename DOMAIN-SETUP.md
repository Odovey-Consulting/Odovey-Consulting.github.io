# Domain Setup - odovey.com

## ✅ **Website Updates Completed**

Your website has been fully updated to use the **odovey.com** domain. All references have been changed from `odovey.com` to `odovey.com`.

---

## 📝 **Changes Made**

### **1. SEO & Metadata**
- ✅ Updated OpenGraph URL in `app/layout.tsx`
- ✅ All meta tags now reference `odovey.com`
- ✅ Social media sharing will show correct domain

### **2. Contact Information**
- ✅ Footer email: `info@odovey.com`
- ✅ Contact page emails: `info@odovey.com` and `sales@odovey.com`
- ✅ All customer-facing contact info updated

### **3. Technical Configuration**
- ✅ Next.js config updated for `odovey.com` domain
- ✅ Image domains whitelist includes `odovey.com`
- ✅ Documentation examples updated

### **4. Documentation**
- ✅ LEARN.md examples updated with new domain
- ✅ All tutorial references use `odovey.com`

---

## 🚀 **Next Steps for Domain Setup**

### **1. Domain Registration & DNS**
- [ ] Ensure `odovey.com` is registered and owned by you
- [ ] Set up DNS records to point to your hosting provider
- [ ] Configure both `www.odovey.com` and `odovey.com` (recommend redirecting www to non-www)

### **2. Email Setup**
- [ ] Set up email hosting for `@odovey.com` addresses
- [ ] Create mailboxes: `info@odovey.com`, `sales@odovey.com`
- [ ] Configure email forwarding if needed
- [ ] Test email delivery

### **3. SSL Certificate**
- [ ] Ensure SSL certificate covers `odovey.com`
- [ ] Verify HTTPS works properly
- [ ] Set up automatic renewal

### **4. Deployment Configuration**
- [ ] Update hosting provider settings with new domain
- [ ] Configure custom domain in Vercel/Netlify/hosting platform
- [ ] Update environment variables if any reference the domain
- [ ] Test deployment with new domain

---

## 🔧 **Hosting Platform Setup**

### **Vercel (Recommended for Next.js)**
```bash
# Add custom domain in Vercel dashboard
1. Go to Project Settings → Domains
2. Add "odovey.com" 
3. Add "www.odovey.com" (optional, with redirect)
4. Follow DNS configuration instructions
```

### **Netlify**
```bash
# Add custom domain in Netlify dashboard
1. Go to Site Settings → Domain Management
2. Add custom domain: "odovey.com"
3. Configure DNS records as instructed
4. Enable HTTPS
```

---

## 📧 **Email Configuration Options**

### **Option 1: Google Workspace (Professional)**
- Professional email with Gmail interface
- Calendar, Drive, and other Google services
- ~$6/user/month

### **Option 2: Microsoft 365**
- Professional email with Outlook
- Office apps included
- ~$6/user/month

### **Option 3: Email Hosting Providers**
- Namecheap, Hostinger, or domain registrar email
- Basic email functionality
- ~$1-3/month

### **Option 4: Email Forwarding (Quick Start)**
- Forward `info@odovey.com` to your personal email
- Free with most domain registrars
- Good for initial setup

---

## 🌐 **DNS Records Setup**

### **Required DNS Records**
```
Type    Name    Value                           TTL
A       @       [Your hosting IP]               300
A       www     [Your hosting IP]               300
CNAME   www     odovey.com                      300
MX      @       [Your email provider MX]       300
TXT     @       [SPF/DKIM records]             300
```

### **Vercel DNS Example**
```
A       @       76.76.19.61                     300
CNAME   www     cname.vercel-dns.com           300
```

---

## ✅ **Testing Checklist**

### **After Domain Setup:**
- [ ] Website loads at `https://odovey.com`
- [ ] All pages work (Home, About, Services, Contact)
- [ ] SSL certificate is valid (green lock icon)
- [ ] Email addresses work (`info@odovey.com`)
- [ ] Contact form integrates with Typeform
- [ ] Social media sharing shows correct domain
- [ ] Google Search Console updated with new domain

---

## 🎯 **Current Status**

**Website Code:** ✅ **Ready for odovey.com**
**Domain Registration:** ❓ **Check with your domain registrar**
**DNS Configuration:** ❓ **Needs setup**
**Email Setup:** ❓ **Needs configuration**
**Hosting Deployment:** ❓ **Needs domain connection**

---

## 📞 **Support Resources**

- **Vercel Domains:** https://vercel.com/docs/concepts/projects/custom-domains
- **Netlify Domains:** https://docs.netlify.com/domains-https/custom-domains/
- **DNS Checker:** https://dnschecker.org/
- **SSL Checker:** https://www.sslshopper.com/ssl-checker.html

Your website is now ready for the `odovey.com` domain! 🚀
