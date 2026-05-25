"use client"
import React from "react"
import { CheckIcon, StarIcon } from "lucide-react"

type PricingTier = {
  id: string
  name: string
  price: number
  priceId: string | null
  currency: string
  interval: string
  features: string[]
  isPopular: boolean
}

interface PricingCardsProps {
  tiers: PricingTier[]
}

const formatPrice = (amount: number, currency: string) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount)

const PricingCards = ({ tiers }: PricingCardsProps) => {

    const handleSubscribe = async (priceId: string | null) => {
        if (!priceId) {
            alert("This plan is free No subscription needed!");
            return;
        }
        try {
            const response = await fetch("/api/stripe/checkout", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({ priceId })
            })
            const { url }: {url?:string} = await response.json();
            if (url) {
               window.location.assign(url);
            } else {
                throw new Error("Failed to create checkout session")
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    }

  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-stretch justify-center gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`group relative flex w-full max-w-sm flex-col overflow-hidden rounded-[2rem] border border-border bg-card/80 p-6 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
              tier.isPopular
                ? "border-primary/40 bg-primary/5"
                : "border-border/70 bg-background"
            }`}
          >
            {tier.isPopular ? (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                <StarIcon className="h-4 w-4" />
                Most popular
              </div>
            ) : (
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {tier.name}
              </div>
            )}

            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  {tier.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Subscription tier for teams and creators.
                </p>
              </div>
              <div className="rounded-3xl bg-muted px-4 py-3 text-right text-sm font-semibold text-foreground">
                {tier.price === 0 ? "Free" : formatPrice(tier.price, tier.currency)}
                <span className="block text-xs font-medium text-muted-foreground">
                  /{tier.interval}
                </span>
              </div>
            </div>

            <div className="mb-6 rounded-3xl border border-border/70 bg-background/70 px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                What’s included
              </p>
              <ul className="mt-4 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

                <button
                    onClick={()=>handleSubscribe(tier.priceId)}
              type="button"
              className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${
                tier.isPopular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-border bg-surface text-foreground hover:bg-slate-100"
              }`}
            >
              {tier.price === 0 ? "Start free" : "Subscribe now"}
            </button>

            <p className="mt-4 text-xs text-muted-foreground">
              {tier.price === 0
                ? "No credit card required."
                : "Cancel anytime with no hidden fees."}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PricingCards
