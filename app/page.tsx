"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AsciiBorder } from "@/components/ascii-border";
import { AsciiBackground } from "@/components/ascii-background";
import { DISRUPTORS_ASCII } from "@/components/ascii-art";

export default function HomePage() {
  return (
    <main className="min-h-screen  bg-[rgb(14,27,245)] text-foreground font-mono relative selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <AsciiBackground />
        <div className="container  overflow-hidden  h-full mx-auto px-4 py-24 md:py-32 relative z-10 flex flex-col justify-center">
          <div className="mx-auto relative w-full flex flex-col items-center text-center">
            <div className="mb-8  inline-block rounded-full border border-white text-white  px-4 py-1.5 text-xs md:text-sm opacity-75  uppercase tracking-widest">
              Fall 2026
            </div>
            <div className="w-full mb-12  flex justify-center">
              <div className="inline-block text-center">
                <pre
                  style={{
                    fontFamily:
                      "SF Mono, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontVariantLigatures: "none",
                    WebkitFontSmoothing: "antialiased",
                  }}
                  className="inline-block leading-none text-primary whitespace-pre font-mono tracking-normal text-[1.8vw] md:text-[10px] lg:text-[12px]"
                >
                  {DISRUPTORS_ASCII}
                </pre>
              </div>
            </div>

            <p className="bg-[rgb(14,27,245)] px-2 mb-10 max-w-2xl text-xs sm:text-sm md:text-md lg:text-lg leading-relaxed text-white opacity-75">
              A no-fluff cohort for extremely dedicated builders.{" "}
              <br className="block" />
              Once a month + special events. No curriculum. Just community +
              accountability.
            </p>
            <Button
              size="lg"
              className="group h-14 text-lg px-8 font-mono border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground text-primary rounded-none transition-all duration-300"
              onClick={() => {
                window.open("https://forms.gle/myy8E9yEyrHfvWzt5", "_blank");
              }}
            >
              [ APPLY_HERE ]
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="border-t border-dashed border-border bg-muted">
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              &gt; HUH?
            </h2>
            <h3 className="mb-16 text-3xl md:text-4xl font-bold text-balance decoration-primary underline-offset-4">
              What is this?
            </h3>
            <div>
              <p>
                Boston has a very high density of smart and ambitious people,
                but they're hard to find. We want to create a space where people
                with similar life goals can find each other and build things
                that have impact.
                <br />
                <br />
                Whether you're a founder coding an MVP for your tech startup, a
                musician trying to get your music out there, or a student trying
                to grow your content creation platform - we just care that you
                want to accomplish something great. As long as you are obsessed
                with what you're doing and have entrepreneurship-oriented goals,
                this is your place.
                <br />
                <br />
                You'll be surrounded by people who are extremely ambitious, are
                willing to take risks, and have the urgency and agency to{" "}
                <span className=" text-white bg-[rgb(14,27,245)] ">do</span>
                . You'll also have access to mentors, successful founders,
                investors, BU and MIT faculty, and more.
                <br />
                <br />
                <span className="font-bold ">
                  You can't be great if you're alone.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Who We're Looking For */}
      <div className="border-t border-dashed border-border">
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              &gt; WHO WE WANT
            </h2>
            <h3 className="mb-12 text-3xl md:text-4xl font-bold text-balance">
              Limited spots.{" "}
              <span className="bg-primary text-primary-foreground px-2">
                Few requirements.
              </span>{" "}
            </h3>

            <div className="space-y-6">
              {[
                "You're actively building something: a startup, a content page, or even your own community",
                "You're willing to show up once a month from 7-8pm (+ special events)",
                "You aren't afraid to experiment and take risks",
                "You have a sense of urgency (or want to use this as an excuse to start)",
                "You're in the Boston area (BU students preferred, but not required)",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center border border-primary text-primary text-xs font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    X
                  </div>
                  <div>
                    <p className="leading-relaxed text-lg">{text}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 items-start group">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center border border-primary text-primary text-xs font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  X
                </div>
                <div>
                  <p className="leading-relaxed text-lg font-black">
                    Even if you don't know what to work on yet, please apply!
                    This'll help you start
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="border-t border-dashed border-border bg-muted">
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              &gt; THE TEAM
            </h2>
            <h3 className="mb-12 text-3xl md:text-4xl font-bold text-balance">
              Who's running this?
            </h3>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="group relative overflow-hidden border-dashed border border-primary bg-[rgb(14,27,245)] p-6">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-xl  border-primary  transition-all duration-300 group-hover:grayscale-0">
                  <img
                    src={"/nicole-debow.jpg"}
                    alt={"Nicole Debow"}
                    className="h-full w-full object-cover cursor-pointer"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/nicoledebow/",
                        "_blank",
                      );
                    }}
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/nicoledebow/"
                  target="_blank"
                  className=" text-xl font-bold uppercase "
                >
                  Nicole Debow
                </a>
                <p className="text-sm mb-1 text-muted-foreground uppercase tracking-wider">
                  Co-Lead
                </p>
                <p className="text-sm text-white uppercase tracking-wider">
                  DS @ BU. Previously worked at Kalshi, now working in the VC
                  space.
                </p>
              </div>
              <div className="group relative overflow-hidden border-dashed border border-primary bg-[rgb(14,27,245)] p-6">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-xl  border-primary  transition-all duration-300 group-hover:grayscale-0">
                  <img
                    src={"/noah-borrup.jpg"}
                    alt={"Noah Borrup"}
                    className="h-full w-full object-cover cursor-pointer"
                    style={{ transform: "scale(2.3)", transformOrigin: "44% 39%" }}
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/noah-borrup/",
                        "_blank",
                      );
                    }}
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/noah-borrup/"
                  target="_blank"
                  className=" text-xl font-bold uppercase "
                >
                  Noah Borrup
                </a>
                <p className="text-sm mb-1 text-muted-foreground uppercase tracking-wider">
                  Co-Lead
                </p>
                <p className="text-sm text-white uppercase tracking-wider">
                  Marketing + AI @ Northeastern. Founder of HonkRadar.
                  Previously worked at swsh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="border-t border-dashed border-border bg-muted">
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              &gt; FAQ
            </h2>
            <h3 className="mb-12 text-3xl md:text-4xl font-bold text-balance">
              Everything you need to know.
            </h3>

            <dl className="space-y-8">
              {[
                {
                  label: "Do I have to pay? Will you take equity?",
                  value: "No and no. We just ask that you show up.",
                },
                {
                  label: "How big is the cohort?",
                  value: "12-24 people.",
                },
                {
                  label: "Who can apply?",
                  value:
                    "Undergrads, grads, PHDs, visiting students, or even dropouts.",
                },
                {
                  label: "When and where does it start?",
                  value:
                    "Fall 2026 semester. Innovate@BU building. Once a month from 7-8pm, + special events.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-primary pl-6">
                  <dt className="mb-2 text-xs font-bold uppercase tracking-wide text-primary">
                    {`// ${item.label}`}
                  </dt>
                  <dd className="text-lg leading-relaxed">{item.value}</dd>
                </div>
              ))}
              <div className="border-l-2 border-primary pl-6">
                <dt className="mb-2 text-xs font-bold uppercase tracking-wide text-primary">
                  // Can I apply if I don't have an idea to work on yet?
                </dt>
                <dd className="text-lg leading-relaxed">
                  As long as we feel you're aligned (whatever that means), we're
                  sure you'll figure it out during the cohort.{" "}
                  <span className="font-bold">TLDR; yes that's fine!</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-dashed border-border">
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-balance">
              Ready to build?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white opacity-75">
              Applications are open now.
            </p>
            <Button
              size="lg"
              className="group h-14 text-lg px-8 font-mono border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground text-primary rounded-none transition-all duration-300"
              onClick={() => {
                window.open("https://forms.gle/myy8E9yEyrHfvWzt5", "_blank");
              }}
            >
              [ APPLY_HERE ]
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-dashed border-border bg-muted">
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-muted-foreground">
              Questions? Reach out to us directly at ndebow@bu.edu and
              borrup.n@northeastern.edu
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
