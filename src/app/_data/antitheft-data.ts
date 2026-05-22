import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const antitheftProjectData: ProjectDetailPageData = {
  sectionLabel: "Case Study",
  projectName: "Antitheft",
  backHref: "/projects",
  backLabel: "Back to Projects",
  navLinks: [
    { label: "Overview", href: "#overview" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Tech Stack", href: "#stack" },
    { label: "Architecture", href: "#architecture" },
    { label: "Showcase", href: "#showcase" },
  ],
  hero: {
    tags: ["Mobile App", "Security", "Accelerometer Sensors", "WebSockets"],
    title: "Antitheft: Real-Time Mobile Motion Security & Alert System",
    description:
      "A proactive Android security app built with Flutter. It utilizes device accelerometer streams to detect unauthorized physical movement while armed, triggering un-mutable alarms and pushing real-time WebSocket alerts to a Next.js server.",
    image: {
      src: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
      alt: "Antitheft hero mockup",
    },
    metrics: [
      { label: "Siren Response Time", value: "< 50ms" },
      { label: "Battery Usage", value: "< 1.2% / Hour" },
      { label: "Alert Latency", value: "< 150ms" },
      { label: "Data Encryption", value: "AES-256" },
    ],
    primaryAction: { label: "GitHub Repo", href: "https://github.com/tjhhh/ji_antitheft" },
    secondaryAction: { label: "Read Sensor Guide", href: "https://github.com/tjhhh/ji_antitheft" },
  },
  overview: {
    title: "The Problem & Solution",
    paragraphs: [
      "THE CHALLENGE: Mobile phone thefts occur rapidly in public spaces (e.g., cafes, libraries) when devices are left on tables or charging. Standard phone locks do not alert the owner during the act of theft, allowing thieves to switch off the phone and disappear.",
      "THE SOLUTION: Antitheft acts as a digital tripwire. When armed, the Flutter background service continuously polls the device's accelerometer. Any physical movement exceeding the threshold triggers an un-mutable maximum volume siren, disables shutdown shortcuts without PIN, and broadcasts WebSocket alerts to the Next.js server.",
    ],
  },
  challenge: {
    title: "Zero-Latency Sensor Streams in Background Execution",
    problem: "When the phone was locked, Android's battery-saving Doze mode would put the background sensor listener thread to sleep, leading to delayed motion detection and allowing thieves to walk away before the alarm fired.",
    solution: "Configured the Flutter app to spin up a foreground service with a persistent notification and acquired partial CPU wake locks. Optimized the WebSocket reconnection handshake using exponential backoff to handle transient network handovers.",
    bullets: [
      "Foreground Service: Runs a persistent sensor thread that bypasses standard Doze sleep cycles.",
      "CPU Wake Locks: Assures background calculation keeps running during screen locks.",
      "WebSocket Retry: Employs exponential backoff to maintain socket links under poor networks."
    ],
    result: "Result: Trigger response remained sub-50ms even after hours in low-power idle states."
  },
  techStack: [
    "Flutter (App Framework)",
    "Dart (Language)",
    "Next.js (Alert Server)",
    "WebSockets (Communication)",
    "Node-Notifier (Push Alerts)",
    "Tailwind CSS (Web UI)",
  ],
  capabilities: [
    {
      icon: "sensors",
      label: "Sensors",
      title: "Accelerometer Monitoring",
      description:
        "Analyzes raw device sensor streams to detect micro-movements, discarding ambient vibrations from subways or table taps.",
    },
    {
      icon: "volume_up",
      label: "Alarm Engine",
      title: "Un-mutable Local Siren",
      description:
        "Plays maximum frequency alarms through system channels, bypassing standard mute controls and headphone redirection.",
    },
    {
      icon: "send",
      label: "Notifications",
      title: "WebSocket Alert Push",
      description:
        "Instantly communicates alarm states to the Next.js server, prompting emails and push alerts to paired devices.",
    },
    {
      icon: "lock",
      label: "System Lock",
      title: "Anti-Poweroff Shield",
      description:
        "Hooks into system UI overlays to request the security PIN before allowing access to power options or status bars.",
    },
  ],
  showcase: {
    title: "Securing Devices Globally",
    visualTitle: "Security Dashboard",
    visualDescription: "Web interface monitoring paired device statuses and sensor alarms in real-time.",
    primaryActionLabel: "View GitHub Repo",
    secondaryActionLabel: "Read Architecture",
  },
  metadata: {
    role: "Lead Mobile Developer & Backend Engineer",
    timeline: "6 Weeks (March 2026)",
    category: "Mobile Security / Utility",
  },
  architecture: {
    title: "System Architecture",
    steps: [
      {
        title: "Arming State",
        body: "User locks device with PIN; accelerometer sensor stream starts registering delta forces.",
        highlighted: false,
      },
      {
        title: "Threshold Calculation",
        body: "Calculates delta vector forces. If magnitude exceeds safety threshold, local siren alarm instantly triggers.",
        highlighted: true,
      },
      {
        title: "WebSocket Broadcast",
        body: "Broadcasting service connects to Next.js API endpoint, passing device ID and sensor payload.",
        highlighted: false,
      },
      {
        title: "Alert Distribution",
        body: "Next.js WebSocket server logs transaction and broadcasts event updates to paired web browsers.",
        highlighted: true,
      },
    ],
  },
  footer: {
    copyrightLabel: "© 2026 Antitheft Case Study. Secure your hardware.",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Back to Top", href: "#top" },
    ],
  },
};
