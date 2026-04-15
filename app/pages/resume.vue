<script setup lang="ts">
useSeoMeta({
  title: 'Resume — Chelsea Huang',
  description: 'Resume of Chelsea Qian Huang — Product strategist and designer specializing in complex B2B financial and operational workflows.',
})
</script>

<template>
  <div class="pt-24 pb-16">
    <section class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        title="Experience & Skills"
        subtitle="16 years turning intricate multi-stakeholder systems into clear, usable products."
        theme="light"
        alignment="left"
      />

      <!-- Download CTA -->
      <div class="-mt-8 mb-12">
        <a
          href="/chelsea-huang-resume.pdf"
          download
          class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-accent-600 text-white hover:bg-accent-700 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Icon name="lucide:download" class="w-4 h-4" />
          Download PDF
        </a>
      </div>

      <!-- Summary -->
      <div class="prose prose-lg max-w-none prose-p:text-light-muted mb-12">
        <p>
          Product strategist and designer specializing in complex B2B financial and operational workflows. 16 years turning intricate multi-stakeholder systems — billing, revenue recognition, order management, sales, marketplace operations — into clear, usable products.
        </p>
      </div>

      <!-- Skills -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        <div>
          <h3 class="font-mono text-xs tracking-widest uppercase text-accent-600 mb-4">Core Skills</h3>
          <ul class="space-y-2 text-sm text-light-muted">
            <li>Qualitative User Research & Problem Definition</li>
            <li>Systems Thinking & Task Analysis</li>
            <li>Design Systems & Information Architecture</li>
            <li>Interaction Design & Visual Design</li>
            <li>Usability Testing & Accessibility</li>
            <li>Journey Mapping</li>
          </ul>
        </div>
        <div>
          <h3 class="font-mono text-xs tracking-widest uppercase text-accent-600 mb-4">Tools & Methods</h3>
          <ul class="space-y-2 text-sm text-light-muted">
            <li>Figma, Google Stitch, Pencil</li>
            <li>AI workflow: Claude, AI Agents, Midjourney</li>
            <li>Design Thinking Workshops</li>
            <li>Agile / Lean UX</li>
            <li>HTML / CSS / Prototyping</li>
          </ul>
        </div>
      </div>

      <!-- Experience -->
      <h3 class="font-mono text-xs tracking-widest uppercase text-accent-600 mb-6">Experience</h3>
      <div class="space-y-8 mb-16">
        <div class="p-6 rounded-xl border border-light-border">
          <div class="flex flex-wrap items-baseline gap-3 mb-3">
            <h4 class="font-display font-bold text-lg text-light-text">Sabbatical — Explorer, Founder & Designer</h4>
            <span class="font-mono text-xs text-light-muted">Mar 2024 – Present</span>
          </div>
          <ul class="space-y-1 text-sm text-light-muted list-disc list-inside">
            <li>Sharpened understanding of behavioral psychology, businesses and investment strategies</li>
            <li>Built hands-on fluency with GenAI, AI agents and vibe coding</li>
            <li>Founded Lugugul Design Studio for independent design work and applied experimentation</li>
          </ul>
        </div>

        <div class="p-6 rounded-xl border border-light-border">
          <div class="flex flex-wrap items-baseline gap-3 mb-3">
            <h4 class="font-display font-bold text-lg text-light-text">Apty</h4>
            <span class="font-mono text-xs text-light-muted">Director, Product Designer · Nov 2023 – Feb 2024</span>
          </div>
          <ul class="space-y-1 text-sm text-light-muted list-disc list-inside">
            <li>Defined strategy to unify product experience across 3 products</li>
            <li>Positioned end-user experience as an "Augmented Reality" layer of host app</li>
          </ul>
        </div>

        <div class="p-6 rounded-xl border border-light-border">
          <div class="flex flex-wrap items-baseline gap-3 mb-3">
            <h4 class="font-display font-bold text-lg text-light-text">Venafi (acquired by CyberArk)</h4>
            <span class="font-mono text-xs text-light-muted">Lead Product Designer · Mar 2020 – Nov 2022</span>
          </div>
          <ul class="space-y-1 text-sm text-light-muted list-disc list-inside">
            <li>Led design strategy & UX for CodeSigning product line from PMF into market-focused design</li>
            <li>Shifted auditing feature from reactive reporting to proactive health monitoring</li>
            <li>Redesigned IA for platform logs from stateless event-driven to stateful action-driven model</li>
          </ul>
        </div>

        <div class="p-6 rounded-xl border border-light-border">
          <div class="flex flex-wrap items-baseline gap-3 mb-3">
            <h4 class="font-display font-bold text-lg text-light-text">Ten-X (acquired by CoStar)</h4>
            <span class="font-mono text-xs text-light-muted">Sr. Product Designer · Sep 2018 – Mar 2020</span>
          </div>
          <ul class="space-y-1 text-sm text-light-muted list-disc list-inside">
            <li>Led UX of operations side of $20B+ CRE marketplace</li>
            <li>Led 2-day workshop with 10 stakeholders to map 6-phase deal lifecycle</li>
            <li>Redesigned buyer profile into contextual "buyer resume" layered by deal phase</li>
          </ul>
        </div>

        <div class="p-6 rounded-xl border border-light-border">
          <div class="flex flex-wrap items-baseline gap-3 mb-3">
            <h4 class="font-display font-bold text-lg text-light-text">Apttus / Conga (acquired by Thoma Bravo)</h4>
            <span class="font-mono text-xs text-light-muted">Senior Product Designer · Jul 2017 – Sep 2018</span>
          </div>
          <ul class="space-y-1 text-sm text-light-muted list-disc list-inside">
            <li>Owned product design for Finance Line — Order Mgmt, Billing, Revenue Recognition</li>
            <li>Developed structured vs. unstructured design framework for billing UX</li>
            <li>Defined infrastructure components of Nova Design System 2.0</li>
          </ul>
        </div>

        <div class="p-6 rounded-xl border border-light-border">
          <div class="flex flex-wrap items-baseline gap-3 mb-3">
            <h4 class="font-display font-bold text-lg text-light-text">SAP Labs</h4>
            <span class="font-mono text-xs text-light-muted">Sr. UX Specialist · Mar 2013 – Jul 2017</span>
          </div>
          <ul class="space-y-1 text-sm text-light-muted list-disc list-inside">
            <li>Customer co-innovation with Dell and Caterpillar</li>
            <li>Delivered Bridge launchpad, Product Feature Management, and SAPbot chatbot</li>
            <li>Designed no-code tool for business users to build mobile applications</li>
          </ul>
        </div>

        <div class="p-6 rounded-xl border border-light-border">
          <div class="flex flex-wrap items-baseline gap-3 mb-3">
            <h4 class="font-display font-bold text-lg text-light-text">Electronics for Imaging (EFI)</h4>
            <span class="font-mono text-xs text-light-muted">UI Designer · Jun 2010 – Mar 2013</span>
          </div>
          <ul class="space-y-1 text-sm text-light-muted list-disc list-inside">
            <li>Designed new generation of Fiery Command Workstation for production printing</li>
            <li>Created first WYSIWYG visual printing driver for Windows 8</li>
          </ul>
        </div>
      </div>

      <!-- Industry Sectors -->
      <h3 class="font-mono text-xs tracking-widest uppercase text-accent-600 mb-6">Industry Sectors</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
        <div class="p-4 rounded-xl border border-light-border">
          <h4 class="font-display font-bold text-sm text-light-text mb-2">Business Operations</h4>
          <ul class="text-xs text-light-muted space-y-1">
            <li>Marketplace Automation (2018–2020)</li>
            <li>Financial Ops — Billing, Revenue Recognition (2017–2018)</li>
            <li>Sales, Manufacturing, IoT (2015–2017)</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl border border-light-border">
          <h4 class="font-display font-bold text-sm text-light-text mb-2">Other Domains</h4>
          <ul class="text-xs text-light-muted space-y-1">
            <li>Cybersecurity (2020–2022)</li>
            <li>Employee & Developer Experience (2014–2015, 2021)</li>
            <li>Production Printing (2010–2013)</li>
          </ul>
        </div>
      </div>

      <!-- Education -->
      <h3 class="font-mono text-xs tracking-widest uppercase text-accent-600 mb-6">Education</h3>
      <div class="space-y-4">
        <div class="p-6 rounded-xl border border-light-border">
          <h4 class="font-display font-bold text-light-text">Indiana University Bloomington</h4>
          <p class="text-sm text-light-muted">MS in HCI/Design · GPA 3.87</p>
        </div>
        <div class="p-6 rounded-xl border border-light-border">
          <h4 class="font-display font-bold text-light-text">Beihang University (BUAA)</h4>
          <p class="text-sm text-light-muted">BS in Automation Science & Electrical Engineering</p>
        </div>
      </div>
    </section>
  </div>
</template>
