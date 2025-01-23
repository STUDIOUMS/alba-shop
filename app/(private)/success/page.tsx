"use client";

import { useSearchParams } from "next/navigation";
import Section from "@/ui/Section";
import BreadCrumbs from "@/ui/BreadCrumbs";
import { paymentCrumbs } from "../constants";

const SuccessPayment = (): JSX.Element => {
  const params = useSearchParams();

  if (true)
    return (
      <Section>
        <BreadCrumbs links={paymentCrumbs} />
      </Section>
    );

  return <></>;
};

export default SuccessPayment;
