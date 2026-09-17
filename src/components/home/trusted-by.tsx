import { Container } from "@/components/ui/container"

const clients = [
  "Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"
]

export function TrustedBy() {
  return (
    <section className="py-12 bg-white border-b border-border/40">
      <Container>
        <p className="text-center text-sm font-medium text-text-muted mb-8 tracking-widest uppercase">
          Trusted By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          {clients.map((client, i) => (
            <div key={i} className="text-xl font-bold font-heading text-text-muted">
              {client}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
