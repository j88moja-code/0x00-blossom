export function Footer() {
  return (
    <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 md:mx-8 flex h-14 items-center">
        <p className="text-xs md:text-sm leading-loose text-muted-foreground text-left">
          © 2020 - {new Date().getFullYear()}{" "}
          <a
            href="https://www.j88moja.tech"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            J88Moja Systems
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
}