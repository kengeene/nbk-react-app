import InsuranceCard from "@/components/shared/insurance-card";

export default function PersonalSolutions() {
  return (
    <>
      <div>
        <h2 className="font-semibold text-3xl">Personal Solutions</h2>
      </div>
      <div className="p-10 text-xl">
        Looking for motor, health, property or general cover? Enjoy quality
        product offerings with high standards of service from NBK Bancassurance
        Intermediary Limited.
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
