import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { About } from "@/components/sections/about";
import { Decoded } from "@/components/sections/decoded";
import { Episodes } from "@/components/sections/episodes";
import { Hero } from "@/components/sections/hero";
import { Newsletter } from "@/components/sections/newsletter";

export function SitePage() {
  return <><SiteHeader /><main><Hero /><Episodes /><Decoded /><About /><Newsletter /></main><SiteFooter /></>;
}
