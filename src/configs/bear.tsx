import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I’m a Martian and, I'm out this world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "wpa2hunter",
        title: "Wpa2Hunter",
        file: "https://raw.githubusercontent.com/sachithdh/WPA2Hunter/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "Automation tool for capturing WPA2 4-way handshake...",
        link: "https://github.com/sachithdh/WPA2Hunter"
      },
      {
        id: "geminicli",
        title: "GeminiCLI",
        file: "https://raw.githubusercontent.com/sachithdh/GeminiCLI/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "A tool to use latest gemini-1.5-pro-latest generative model...",
        link: "https://github.com/sachithdh/GeminiCLI"
      },
      {
        id: "tranxcribe",
        title: "tranXcribe",
        file: "https://raw.githubusercontent.com/sachithdh/tranXcribe/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "Transcribing audio files to text...",
        link: "https://github.com/sachithdh/tranXcribe"
      },
      {
        id: "tranxcribecli",
        title: "tranxcribe-CLI",
        file: "https://raw.githubusercontent.com/sachithdh/tranXcribe-CLI/master/README.md",
        icon: "i-fa-brands:vuejs",
        excerpt: "A CLI version of tranXcribe webApp...",
        link: "https://github.com/sachithdh/tranXcribe-CLI"
      }
    ]
  }
];

export default bear;
