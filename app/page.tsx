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
              Spring 2026
            </div>
            <div className="  overflow-y-hidden mb-12 flex justify-center">
              <div className="inline-block   ">
                <pre
                  style={{
                    fontFamily: "SF Mono",
                  }}
                  className="   p-0 m-0 text-[0.4rem] sm:text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] leading-1.5 sm:leading-2 md:leading-3 lg:leading-4  text-primary whitespace-pre  font-mono  tracking-normal"
                >
                  {DISRUPTORS_ASCII}
                </pre>
              </div>
            </div>

            <p className="bg-[rgb(14,27,245)] px-2 mb-10 max-w-2xl text-xs sm:text-sm md:text-md lg:text-lg leading-relaxed text-white opacity-75">
              A no-fluff cohort for extremely dedicated builders.{" "}
              <br className="block" />1 hr/week. No curriculum. Just community +
              accountability.
            </p>
            <Button
              size="lg"
              className="group h-14 text-lg px-8 font-mono border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground text-primary rounded-none transition-all duration-300"
              onClick={() => {
                window.open("https://forms.gle/XfkEE5GLTqCHR41r9", "_blank");
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
                "You're willing to show up every week, consistently",
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
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/stava-f6b32.appspot.com/o/IMG_7543.jpg?alt=media&token=75774781-6a51-45b7-a279-3b42360cd534"
                    }
                    alt={"Ary Shrivastava"}
                    className="h-full w-full object-cover cursor-pointer"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/aryaman-shrivastava/",
                        "_blank"
                      );
                    }}
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/aryaman-shrivastava/"
                  target="_blank"
                  className=" text-xl font-bold uppercase "
                >
                  Ary Shrivastava
                </a>
                <p className="text-sm mb-1 text-muted-foreground uppercase tracking-wider">
                  Co-Lead
                </p>
                <p className="text-sm text-white uppercase tracking-wider">
                  CS @ BU. Contributor @ MIT NANDA. Currently building agent
                  coordination at{" "}
                  <a
                    href="https://endercom.io"
                    target="_blank"
                    className="underline"
                  >
                    endercom.io
                  </a>
                  . Previously worked with the ESA.
                </p>
              </div>
              <div className="group relative overflow-hidden border-dashed border border-primary bg-[rgb(14,27,245)] p-6">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-xl  border-primary  transition-all duration-300 group-hover:grayscale-0">
                  <img
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/stava-f6b32.appspot.com/o/1702059271200.jpeg?alt=media&token=b6ec6698-3c10-4f04-9982-717f1787230e"
                    }
                    alt={"Aryan Jain"}
                    className="h-full w-full object-cover cursor-pointer"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/aryanjain6492/",
                        "_blank"
                      );
                    }}
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/aryanjain6492/"
                  target="_blank"
                  className=" text-xl font-bold uppercase "
                >
                  Aryan Jain
                </a>
                <p className="text-sm mb-1 text-muted-foreground uppercase tracking-wider">
                  Co-Lead
                </p>
                <p className="text-sm text-white uppercase tracking-wider">
                  DS and Econ @ BU. Founder of{" "}
                  <a
                    href="https://designmy.org"
                    target="_blank"
                    className="underline"
                  >
                    DesignMy Education
                  </a>
                  : turning youth entrepreneurship more experiential and
                  accessible.
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
                  value: "10-16 people.",
                },
                {
                  label: "Who can apply?",
                  value:
                    "Undergrads, grads, PHDs, visiting students, or even dropouts.",
                },
                {
                  label: "When and where does it start?",
                  value:
                    "Spring 2026 semester. Innovate@BU building. We'll send you the details when you get in.",
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
                window.open("https://forms.gle/XfkEE5GLTqCHR41r9", "_blank");
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
              Questions? Reach out to us directly at ary@stava.io
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
