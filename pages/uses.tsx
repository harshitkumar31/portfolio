import Container from 'components/Container';
import PageHeader from 'components/PageHeader';

interface GearCategory {
  title: string;
  subtitle: string;
  items: {
    name: string;
    description: string;
    tag?: string;
  }[];
}

const GEAR_DATA: GearCategory[] = [
  {
    title: 'Hardware & Workstation',
    subtitle: 'The primary physical machines powering daily platform development and design.',
    items: [
      {
        name: 'MacBook Pro 16" (Apple Silicon)',
        description: 'Blazing compilation times, endless battery life, and silent operation even under heavy Docker and local supergraph simulation.',
        tag: 'Primary Machine'
      },
      {
        name: 'Apple Studio Display 27" 5K',
        description: 'Pixel-perfect typography rendering, built-in spatial audio, and seamless single-cable Thunderbolt docking.',
        tag: 'Display'
      },
      {
        name: 'Keychron Custom Mechanical Keyboard',
        description: 'Tuned tactile switches with custom double-shot PBT keycaps for all-day typing comfort.',
        tag: 'Input'
      },
      {
        name: 'Logitech MX Master 3S',
        description: 'Quiet electromagnetic MagSpeed wheel and ergonomic thumb scroll for horizontal diff navigation.',
        tag: 'Mouse'
      },
      {
        name: 'AirPods Max & AirPods Pro 2',
        description: 'Active noise cancellation for deep focus sessions and crisp audio during cross-functional syncs.',
        tag: 'Audio'
      }
    ]
  },
  {
    title: 'Software & Developer Environment',
    subtitle: 'Tools and applications chosen for velocity, keyboard-driven navigation, and zero latency.',
    items: [
      {
        name: 'Visual Studio Code',
        description: 'Configured with minimal chrome, SF Mono font with ligatures, and extensions for GraphQL, Rust, and TypeScript.',
        tag: 'Editor'
      },
      {
        name: 'Ghostty & Warp Terminal',
        description: 'GPU-accelerated terminal emulation with zsh, starship prompt, and custom shell aliases.',
        tag: 'Terminal'
      },
      {
        name: 'Raycast',
        description: 'The ultimate Spotlight replacement. Custom scripts, clipboard history, window management, and quick GitHub lookups.',
        tag: 'Productivity'
      },
      {
        name: 'Apollo Studio & Insomnia',
        description: 'For testing complex federated GraphQL schemas, subgraphs, and introspecting supergraph queries.',
        tag: 'API Client'
      },
      {
        name: 'TablePlus',
        description: 'Native macOS GUI for inspecting PostgreSQL, Redis, and MySQL databases.',
        tag: 'Database'
      },
      {
        name: 'Arc & Safari',
        description: 'Spaces and split-view tabs in Arc for work projects; Safari for pure speed and battery efficiency.',
        tag: 'Browser'
      }
    ]
  },
  {
    title: 'Homelab & Server Infrastructure',
    subtitle: 'Self-hosted infrastructure running in the home rack for network privacy, storage, and automation.',
    items: [
      {
        name: 'Raspberry Pi 4 Model B (8GB)',
        description: 'Headless home server running Linux, managing personal microservices, automated backups, and network DNS.',
        tag: 'Server'
      },
      {
        name: 'Custom NAS Storage Rack',
        description: 'Redundant RAID array for media storage, time machine backups, and local development archives.',
        tag: 'Storage'
      },
      {
        name: 'Pi-hole & WireGuard VPN',
        description: 'Network-wide DNS sinkhole for ad-blocking paired with WireGuard for secure remote tunneling home.',
        tag: 'Networking'
      },
      {
        name: 'Docker Compose Ecosystem',
        description: 'Self-hosted stack containerized with Docker: Home Assistant, Vaultwarden, Grafana, and Prometheus monitoring.',
        tag: 'Containers'
      }
    ]
  }
];

export default function Uses() {
  return (
    <Container
      title="Uses & Studio Setup – Harshit Kumar"
      description="A detailed look at the hardware, software, and homelab setup Harshit Kumar uses daily for engineering platform systems."
    >
      <div className="mx-auto mb-20 w-full max-w-[840px]">
        {/* Apple Page Header */}
        <PageHeader
          eyebrow="Studio & Equipment"
          title="Tools of the Craft"
          description="A curated overview of the hardware, development tools, and homelab infrastructure I rely on every day to design and build software."
        />

        {/* Categories Section */}
        <div className="space-y-16">
          {GEAR_DATA.map((category) => (
            <section key={category.title}>
              <div className="mb-6">
                <h2 className="text-[24px] font-semibold tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7] sm:text-[28px]">
                  {category.title}
                </h2>
                <p className="mt-1 text-[15px] text-[#6e6e73] dark:text-[#86868b]">
                  {category.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="apple-card p-5 sm:p-6 transition-all hover:shadow-apple-lg flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-[17px] font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-[#0071e3] dark:bg-white/[0.08] dark:text-[#2997ff]">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}

