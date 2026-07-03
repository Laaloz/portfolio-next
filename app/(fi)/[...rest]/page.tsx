import { notFound } from "next/navigation";

/* Catch-all so unmatched URLs render the (fi) not-found page —
   required because route groups create multiple root layouts. */
export default function CatchAll() {
    notFound();
}
