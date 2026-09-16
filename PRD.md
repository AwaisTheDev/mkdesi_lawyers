# Product Requirements Document
## Makdesi & Associates Lawyers – Homepage Redesign

**Prepared by:** WebGX
**Client:** Makdesi And Associates Lawyers
**Date:** 14 August 2026
**Status:** Draft v1.0

---

## 1. Overview

Makdesi And Associates Lawyers currently operates on a Shopify-based website (makdesilawyers.com.au) built with a generic ecommerce theme, which is not well suited to a law firm's needs. The current homepage is text-heavy, lacks visual hierarchy, and doesn't clearly communicate trust, credibility, or the firm's areas of practice.

This project covers a **homepage-only redesign**, using the Advorus Webflow template (advorus.webflow.io) as the base design system. The template will be used as-is structurally and visually, with all content, imagery, and copy replaced to reflect Makdesi And Associates Lawyers.

## 2. Objectives

- Modernise the homepage look and feel to build trust and credibility
- Improve visual hierarchy so services and calls-to-action are easy to find
- Present Mary Makdesi and the legal team professionally
- Showcase practice areas clearly (Commercial, Criminal, Family, Immigration, Property, Wills & Estate, etc.)
- Surface client reviews prominently
- Include clear contact and location details
- Set up a homepage that can act as a foundation for future site pages (About, Lawyers, Services, Contact)

## 3. Scope

**In scope:**
- Homepage design and build only, duplicated from the Advorus template structure
- Content and image swap to reflect Makdesi's brand, services, team, and reviews
- Responsive design (desktop, tablet, mobile)
- Contact form and location map integration

**Out of scope:**
- Internal pages (About Us, individual lawyer bios, service detail pages, blog, FAQs)
- Ecommerce/cart functionality removal or migration
- SEO migration and redirects (to be scoped separately if the platform changes)
- Platform migration decision (Shopify vs Webflow vs other) – to be confirmed with client

## 4. Reference Template Mapping

The Advorus homepage template includes the following sections. Below is how each maps to Makdesi's actual content.

| Advorus Section | Purpose in Template | Makdesi Homepage Equivalent |
|---|---|---|
| Navbar + hero banner | Firm intro, hero image, "Book a Consultation" CTA | Firm name, tagline ("High Quality, Cost Effective Legal Services"), hero image (justice/legal imagery), "Contact Us" CTA |
| Awards/logo strip | Trust signals (awards, associations) | Replace with relevant accreditations if available, or remove if none exist (do not fabricate) |
| About Me section | Founder story, credentials | Short firm intro pulled from existing About Us content, feature Mary Makdesi as Principal |
| Stats/counters | Experience, success rate, deal value | Only include if real figures are supplied by the client; otherwise remove this block |
| Our Service section | Service cards with icons | Map to Makdesi's actual practice areas: Commercial Law, Criminal Law, Family Law, Immigration Law, Negotiations with Government Bodies, Power of Attorney, Property & Conveyancing, Tax Matters, Wills & Estate Planning |
| Work Process / "Why choose us" | Value propositions | Rewrite around Makdesi's positioning: friendly, experienced, cost-effective, long-term client relationships |
| Case Studies | Legal outcome highlights | Replace with generic "How We Help" cards or omit if no case studies are approved for publishing (confirm with client re: confidentiality) |
| Meet the Team | Lawyer profiles with photos | Mary Makdesi (Principal), Paul Villani (Lawyer), Christine Diab (Lawyer), Clara Gallo (Legal Secretary) |
| Testimonials/Reviews | Client quotes | Replace with real client reviews currently shown on the existing site's Client Reviews page/slider |
| Blog/Insights | Article previews | Remove from homepage for this phase, or replace with a placeholder "Legal Insights coming soon" section if the client wants to retain the layout for future use |
| Booking form | Appointment booking with service dropdown | Replace with a general enquiry/contact form, dropdown listing Makdesi's actual practice areas |
| Footer | Contact details, quick links, office addresses | Address: 705 Sydney Road, Brunswick VIC 3056. Phone: 0450 706 100. Email: mary@makdesilawyers.com.au |

## 5. Homepage Section Plan (Final Structure)

1. **Header/Navigation** – Logo, primary nav (Home, About Us, Our Lawyers, Our Services, Our Location, Client Reviews, Contact Us), "Contact Us" CTA button
2. **Hero** – Headline, supporting copy from current homepage intro, CTA button, hero image
3. **About/Intro** – Short firm description, "Learn More" link to About Us page
4. **Practice Areas** – Grid/cards for all 9 service categories with icons and short descriptions, linking to future service pages
5. **Why Choose Us** – 4 value proposition points (friendly guidance, cost-effective, long-term relationships, experience-led advice)
6. **Meet the Team** – 4 team member cards with photos, names, and roles
7. **Client Reviews** – Testimonial slider using existing/real client reviews
8. **Location** – Address, embedded Google Map, quick contact details
9. **Contact/Enquiry Form** – Name, email, phone, practice area dropdown, message field
10. **Footer** – Contact details, quick links, social links (if applicable), copyright

## 6. Content Requirements (Client Input Needed)

- Confirmation of hero headline and subheading copy (can reuse or refresh existing copy)
- High-quality photos: firm exterior/interior, team headshots, hero imagery
- Confirmation of any real stats (years in practice, cases handled) — none will be invented
- Confirmation of which client reviews can be published, and in what format (star rating, name, or anonymous)
- Confirmation of accreditations/associations (e.g. Law Institute Victoria) if any exist for a trust badge section
- Final wording for practice area short descriptions (can be drafted by WebGX for client approval)

## 7. Design & Technical Notes

- Base structure, layout, and interaction patterns duplicated from the Advorus Webflow template
- Colour palette and typography to be adapted to Makdesi's brand (or a refreshed palette if no existing brand guidelines apply)
- Platform: to be confirmed. If staying on Shopify, homepage sections will be rebuilt as custom sections/theme blocks matching the Advorus layout. If moving to Webflow, the template can be duplicated directly.
- Fully responsive across desktop, tablet, and mobile breakpoints
- Contact form to route to mary@makdesilawyers.com.au (or client's preferred inbox)
- Map embed to use the existing Brunswick office location

## 8. Assumptions

- Client will supply or approve final copy and imagery before development begins
- No case studies will be published unless explicitly approved due to client confidentiality in legal matters
- This PRD covers homepage only; a separate scope/quote will be needed for remaining site pages

## 9. Next Steps

1. Client review and sign-off on this PRD
2. Confirm platform decision (Shopify rebuild vs Webflow migration)
3. Collect final content and imagery from client
4. Build homepage based on approved structure
5. Client review round and revisions
6. Launch