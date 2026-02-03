'use client';

import { Eye, Star, GitFork } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Hero2 } from '@/components/hero2-header';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <>
      <SiteHeader />
      <section>
        <Hero2 />
      </section>
      <section>
        <div className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-4 flex items-center justify-start gap-3">
              <Badge variant="hero" className="group">
                <span className="text-sm font-normal">Templates</span>
              </Badge>
              <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
            </div>
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">Landing Page Templates</h2>
            <p className="mb-6 mt-3 text-base">Explore our collection of beautifully designed landing page templates built with modern design patterns and best practices.</p>
          </div>

          {/* Templates Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Vaulto",
                imageUrl: "./Templates/Vaulto.png",
                livePreviewUrl: "https://vaulto-nextjs-template.vercel.app/",
                githubUrl: "https://github.com/KingTroy125/Vaulto-nextjs-template",
              },
              {
                title: "Modula Landing Page",
                imageUrl: "./Templates/Modula.png",
                livePreviewUrl: "https://modula-nj.vercel.app/",
                githubUrl: "",
              },
              {
                title: "Opencal PureLanding",
                imageUrl: "./Templates/Opencal.png",
                livePreviewUrl: "https://opencal-nextjs.vercel.app/",
                githubUrl: "",
              },
            ].map((template, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-video">
                <img
                  alt={template.title}
                  src={template.imageUrl}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Blur overlay on hover */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center p-6">
                  {/* Content */}
                  <div className="w-full text-white space-y-4">
                    {/* Project Title */}
                    <h3 className="text-center text-lg font-semibold">{template.title}</h3>
                    
                    {/* Stats */}
                    {/*<div className="flex justify-center gap-6 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{template.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{template.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{template.forks}</span>
                      </div>
                    </div>*/}

                    {/* Buttons */}
                    <div className="flex items-center justify-center gap-3">
                      <Button asChild size="sm" className="bg-white text-black hover:bg-gray-200">
                        <a href={template.livePreviewUrl}>
                          <Eye className="w-4 h-4" />
                          Live Preview
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-white/20">
                        <a href={template.githubUrl}>
                          <svg role="img" viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                          Github
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}