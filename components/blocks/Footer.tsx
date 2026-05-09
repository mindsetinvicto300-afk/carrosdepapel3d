import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-12 w-full">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center gap-6">

        <div className="text-xl font-extrabold tracking-tight text-foreground/80">
          Carrinhos 3D<span className="text-primary">.</span>
        </div>

        <div className="relative w-full max-w-md h-16">
          <Image
            src="/images/footerseguro.webp"
            alt="Compra 100% segura — selos de segurança"
            fill
            className="object-contain"
            sizes="448px"
          />
        </div>
        
        <p className="text-sm text-muted-foreground max-w-2xl">
          Este site não faz parte do site do Facebook ou da Meta Platforms Inc.
          Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.
          FACEBOOK é uma marca comercial independente da Meta Platforms Inc.
        </p>
        
        <div className="flex gap-4 text-sm text-muted-foreground/80 mt-2">
          <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
          <span>|</span>
          <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
        </div>
        
        <p className="text-xs text-muted-foreground/60 mt-4">
          © {currentYear} Carrinhos 3D. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
