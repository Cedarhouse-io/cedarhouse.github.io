"use client";

import {
  Column,
  Grid,
  Heading,
  Text,
  Button,
  Card,
  Media,
  Input,
  Textarea,
  Flex,
  Badge,
  AccordionGroup,
  Icon,
  Fade,
  AutoScroll,
  Logo,
  Row,
} from "@once-ui-system/core";

export default function LandingPage() {
  return (
    <Column padding="xl" gap="xl" style={{ maxWidth: "1200px", margin: "0 auto" }}>

      {/* Hero Section */}
      <Column align="center" gap="l" style={{ minHeight: "80vh", justifyContent: "center" }}>
        <Heading variant="display-strong-xl" align="center">
          Tech Confidence for the Mission-Driven
        </Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak" align="center">
          Cedarhouse delivers managed services and purpose-built software for health care and nonprofits.
        </Text>
        <Flex horizontal="center">
          <Button href="#contact">Work With Us</Button>
        </Flex>
      </Column>

      {/* Who We Serve */}
      <Column gap="xl">
        <Heading variant="heading-default-xl" align="center">
          Who We Serve
        </Heading>

        <Grid columns="4" tabletColumns="2" mobileColumns="1" gap="l">
          {/* FQHCs */}
          <Card padding="m" border="neutral-alpha-medium" shadow="s" radius="m">
            <Column gap="s" fillHeight>
              <Icon name="healthcare" size="l" onBackground="accent-strong" />
              <Badge background="accent-weak" textVariant="body-strong-xs" padding="s">Healthcare</Badge>
              <Heading variant="heading-default-m">FQHCs</Heading>
              <Text>Community-focused clinics offering comprehensive care.</Text>
              <Button size="s" href="#contact">Learn More</Button>
            </Column>
          </Card>

          {/* Behavioral Providers */}
          <Card padding="m" border="neutral-alpha-medium" shadow="s" radius="m">
            <Column gap="s" fillHeight>
              <Icon name="behavioral" size="l" onBackground="accent-strong" />
              <Badge background="accent-weak" textVariant="body-strong-xs" padding="s">Mental Health</Badge>
              <Heading variant="heading-default-m">Behavioral Providers</Heading>
              <Text>EMR, billing, and support for therapy and psychiatric care.</Text>
              <Button size="s" href="#contact">Learn More</Button>
            </Column>
          </Card>

          {/* Nonprofits */}
          <Card padding="m" border="neutral-alpha-medium" shadow="s" radius="m">
            <Column gap="s" fillHeight>
              <Icon name="nonprofitSector" size="l" onBackground="accent-strong" />
              <Badge background="accent-weak" textVariant="body-strong-xs" padding="s">Nonprofit</Badge>
              <Heading variant="heading-default-m">Nonprofits</Heading>
              <Text>Secure, scalable support for community-driven missions.</Text>
              <Button size="s" href="#contact">Learn More</Button>
            </Column>
          </Card>

          {/* Solo/Group Clinics */}
          <Card padding="m" border="neutral-alpha-medium" shadow="s" radius="m">
            <Column gap="s" fillHeight>
              <Icon name="smb" size="l" onBackground="accent-strong" />
              <Badge background="accent-weak" textVariant="body-strong-xs" padding="s">Clinics</Badge>
              <Heading variant="heading-default-m">Solo/Group Clinics</Heading>
              <Text>MSP + SaaS tailored for small practice agility.</Text>
              <Button size="s" href="#contact">Learn More</Button>
            </Column>
          </Card>
        </Grid>
      </Column>

      {/* Services */}
      <AccordionGroup
        size="m"
        border="neutral-weak"
        radius="m"
        shadow="m"
        items={[
          {
            title: <Flex gap="s" align="center"><Icon name="it" size="l" onBackground="accent-strong" />Managed IT Services</Flex>,
            content: <Text onBackground="neutral-weak">Proactive, reliable infrastructure and network management — fully outsourced.</Text>,
          },
          {
            title: <Flex gap="s" align="center"><Icon name="cloud" size="l" onBackground="accent-strong" />Cloud Migration & Hosting</Flex>,
            content: <Text onBackground="neutral-weak">Migrate your systems to the cloud with scalable, secure infrastructure.</Text>,
          },
          {
            title: <Flex gap="s" align="center"><Icon name="device" size="l" onBackground="accent-strong" />Endpoint & Device Management</Flex>,
            content: <Text onBackground="neutral-weak">Centralized control over your organization’s laptops, tablets, and mobile devices.</Text>,
          },
          {
            title: <Flex gap="s" align="center"><Icon name="phone" size="l" onBackground="accent-strong" />VoIP & Telephony</Flex>,
            content: <Text onBackground="neutral-weak">Cloud-based phone systems for modern, location-independent teams.</Text>,
          },
          {
            title: <Flex gap="s" align="center"><Icon name="security" size="l" onBackground="accent-strong" />Cybersecurity</Flex>,
            content: <Text onBackground="neutral-weak">Threat prevention, detection, and response designed for healthcare and nonprofits.</Text>,
          },
          {
            title: <Flex gap="s" align="center"><Icon name="backup" size="l" onBackground="accent-strong" />Backup & Disaster Recovery</Flex>,
            content: <Text onBackground="neutral-weak">Automatic backups and continuity planning to ensure data is never lost.</Text>,
          },
          {
            title: <Flex gap="s" align="center"><Icon name="compliance" size="l" onBackground="accent-strong" />Compliance & HIPAA Consulting</Flex>,
            content: <Text onBackground="neutral-weak">HIPAA, NIST, and SOC 2 readiness with policies, risk audits, and controls.</Text>,
          },
          {
            title: <Flex gap="s" align="center"><Icon name="help" size="l" onBackground="accent-strong" />Tech Support & Help Desk</Flex>,
            content: <Text onBackground="neutral-weak">Fast, friendly support for users across your organization — phone, email, and remote.</Text>,
          },
          {
            title: <Flex gap="s" align="center"><Icon name="code" size="l" onBackground="accent-strong" />Custom Software Development</Flex>,
            content: <Text onBackground="neutral-weak">Build tailored web, mobile, or integration tools to automate and streamline operations.</Text>,
          },
          {
            title: <Flex gap="s" align="center"><Icon name="ehr" size="l" onBackground="accent-strong" />Behavioral Telehealth Platform</Flex>,
            content: <Text onBackground="neutral-weak">A turnkey EHR and practice management solution built for behavioral health clinics.</Text>,
          },
          {
            title: <Flex gap="s" align="center"><Icon name="nonprofit" size="l" onBackground="accent-strong" />Nonprofit Tech Enablement</Flex>,
            content: <Text onBackground="neutral-weak">Tools and services to empower mission-driven organizations and improve community impact.</Text>,
          },
          {
            title: <Flex gap="s" align="center"><Icon name="infra" size="l" onBackground="accent-strong" />Digital Infrastructure Strategy</Flex>,
            content: <Text onBackground="neutral-weak">Strategic planning and roadmaps for resilient, scalable technology foundations.</Text>,
          },
        ]}
      />

      {/* SaaS Preview */}
      <Column gap="m">
        <Heading variant="heading-default-xl" align="center">Our Telehealth SaaS</Heading>
        <Grid columns="2" mobileColumns="1" gap="m">
          <Media
            src="/images/app-preview.png"
            alt="Platform preview"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
          <Column gap="s">
            <Text variant="heading-default-l">Behavioral Health Practice Management</Text>
            <Text>Scheduling, e-prescribing, documentation, billing — all in one place.</Text>
            <Button href="#contact">Request Early Access</Button>
          </Column>
        </Grid>
      </Column>

      {/* Why Cedarhouse */}
<Column gap="m" align="center">
  <Heading variant="heading-default-xl" align="center">
    Why Cedarhouse
  </Heading>
  <Grid columns="4" tabletColumns="2" mobileColumns="1" gap="l">
    <Card padding="m" shadow="m" radius="m" border="neutral-alpha-medium">
      <Column gap="s">
        <Text variant="heading-default-m">Trusted Expertise</Text>
        <Text onBackground="neutral-weak">
          ✅ Trusted by health and nonprofit organizations for reliable IT services and SaaS.
        </Text>
      </Column>
    </Card>
    <Card padding="m" shadow="m" radius="m" border="neutral-alpha-medium">
      <Column gap="s">
        <Text variant="heading-default-m">Flexible Engagement</Text>
        <Text onBackground="neutral-weak">
          ✅ No lock-in contracts — scale your support as needed, when needed.
        </Text>
      </Column>
    </Card>
    <Card padding="m" shadow="m" radius="m" border="neutral-alpha-medium">
      <Column gap="s">
        <Text variant="heading-default-m">Local + Responsive</Text>
        <Text onBackground="neutral-weak">
          ✅ Fast response times from a Louisiana-based team that cares.
        </Text>
      </Column>
    </Card>
    <Card padding="m" shadow="m" radius="m" border="neutral-alpha-medium">
      <Column gap="s">
        <Text variant="heading-default-m">Compliance Specialists</Text>
        <Text onBackground="neutral-weak">
          ✅ HIPAA, NIST, and IT compliance built into every service.
        </Text>
      </Column>
    </Card>
  </Grid>
</Column>

  {/* Trusted By */}
<Column gap="m">
  <Heading variant="heading-default-xl" align="center">
    Trusted by Teams Like Yours
  </Heading>

  <>
     <Fade zIndex={1} to="right" fillHeight width="64" position="absolute" left="0" top="0" />
    <AutoScroll speed="fast" paddingY="l" gap="l">
      <img src="/logos/youthoasis.svg" style={{ height: '48px', objectFit: 'contain' }} alt="Youth Oasis" />
      <img src="/logos/positivechoices.jpeg" style={{ height: '48px', objectFit: 'contain' }} alt="Positive Choices" />
    </AutoScroll>
    <Fade zIndex={1} to="left" fillHeight width="64" position="absolute" right="0" top="0" />
  </>
</Column>



     {/* Contact */}
<Column id="contact" gap="l" paddingY="xl">
  <Heading variant="heading-default-xl" align="center">
    Let’s Get to Work
  </Heading>

  <Column gap="l" fillWidth maxWidth={600} align="center" paddingX="m">
    <form onSubmit={(e) => e.preventDefault()} style={{ width: "100%" }}>
      <Column gap="m">
        <Input
          id="name"
          name="name"
          label="Name"
          required
          radius="top"
        />
        <Input
          id="email"
          name="email"
          label="Email"
          type="email"
          required
        />
        <Textarea
          id="message"
          name="message"
          label="Message"
          lines={5}
          radius="bottom"
          validate={(value) =>
            typeof value === "string" && value.length < 20
              ? "Please enter at least 20 characters"
              : null
          }
        />
        <Button type="submit" variant="primary" size="m" fillWidth>
  Send Message
</Button>
      </Column>
    </form>
  </Column>
</Column>




{/* Footer */}
<Column
  as="footer"
  paddingY="64"
  paddingX="m"
  gap="xl"
  background="page"
  borderTop="neutral-alpha-medium"
>
  <Flex
    wrap
    gap="64"
    horizontal="space-between"
    vertical="start"
    tabletDirection="column"
  >
    {/* Company Info */}
    <Column gap="xs">
      <Text variant="heading-default-s" weight="strong">
        Cedarhouse Legacy Partners, L3C
      </Text>
      <Text>2320 Drusilla Lane</Text>
      <Text>Suite A</Text>
      <Text>Baton Rouge, LA 70809</Text>
      <Text>
        <a href="mailto:info@cedarhouse.io">info@cedarhouse.io</a>
      </Text>
      <Text>
        <a href="tel:12253081327">(225) 308-1327</a>
      </Text>
    </Column>

    {/* Services */}
    <Column gap="xs">
      <Text variant="heading-default-xs" weight="strong">Our Services</Text>
      <Text><a href="/services/cloud">Cloud & On-Prem Infrastructure</a></Text>
      <Text><a href="/services/support">Technical Support</a></Text>
      <Text><a href="/services/vcio">Virtual CIO Services</a></Text>
      <Text><a href="/services/elemental">Telehealth Practice Management</a></Text>
    </Column>

    {/* Industries */}
    <Column gap="xs">
      <Text variant="heading-default-xs" weight="strong">Industries We Serve</Text>
      <Text><a href="/industries/healthcare">Healthcare Institutions</a></Text>
      <Text><a href="/industries/nonprofits">Nonprofits</a></Text>
      <Text><a href="/industries/government">Governmental Agencies</a></Text>
    </Column>

    {/* Legal + Social Row */}
    <Column gap="xs" fillWidth>
      <Flex horizontal="space-between" wrap>
        {/* Legal Links */}
        <Flex gap="s" wrap>
          <Text><a href="/terms">Terms</a></Text>
          <Text>|</Text>
          <Text><a href="/privacy">Privacy</a></Text>
        </Flex>

        {/* Social Icons */}
        <Flex gap="m">
          <a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
            <Icon name="facebook" size="m" onBackground="neutral-strong" />
          </a>
          <a href="https://x.com/cedarhousel3c" target="_blank" rel="noopener noreferrer">
            <Icon name="x" size="m" onBackground="neutral-strong" />
          </a>
          <a href="https://linkedin.com/company/cedarhouse-partners" target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size="m" onBackground="neutral-strong" />
          </a>
          <a href="https://instagram.com/cedarhouse.io" target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" size="m" onBackground="neutral-strong" />
          </a>
        </Flex>
      </Flex>
    </Column>
  </Flex>

  {/* Bottom Line */}
<Text align="center" size="s" onBackground="neutral-strong">
  © {new Date().getFullYear()} Cedarhouse Legacy Partners, L3C. All rights reserved.
</Text>
</Column>

    </Column>
  );
}