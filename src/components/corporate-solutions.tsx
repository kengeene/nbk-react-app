import InsuranceCard from "@/components/shared/insurance-card";

export default function CorporateSolutions() {
  return (
    <>
      <div>
        <h2 className="font-semibold text-3xl">Corporate Solutions</h2>
      </div>
      <div className="p-10 text-xl">
        NBK Bancassurance Intermediary Limited has partnered with major insurers
        to offer your organization the best risk management advisory and
        insurance services in Kenya.
      </div>
      <div className="grid grid-cols-4 gap-4">
        <InsuranceCard title="General Insurance" image="bg-general-insurance" />
        <InsuranceCard title="Health Insurance" image="bg-health-insurance" />
        <InsuranceCard title="Motor Insurance" image="bg-motor-insurance" />
        <InsuranceCard
          title="Property Insurance"
          image="bg-property-insurance"
        />
      </div>
    </>
  );
}
