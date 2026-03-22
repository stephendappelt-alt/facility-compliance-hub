export default function Disclaimer() {
  return (
    <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-5">
      <h4 className="mb-2 text-sm font-semibold text-amber-900">
        Important Disclaimer
      </h4>
      <p className="text-sm leading-relaxed text-amber-800">
        The information provided in this article is intended for general
        educational purposes only and should not be considered legal, regulatory,
        or professional compliance advice. Content is based primarily on national
        standards including NFPA (National Fire Protection Association), EPA
        (Environmental Protection Agency), ASHRAE, and ICC (International Code
        Council) publications current as of the date of publication.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-amber-800">
        <strong>Compliance requirements vary significantly by state, county, and
        municipality.</strong> Local Authorities Having Jurisdiction (AHJs) may
        adopt, amend, or supplement national codes with additional requirements.
        Always verify applicable requirements with your local AHJ, a licensed
        professional engineer, or a qualified compliance consultant before making
        compliance decisions for your facility.
      </p>
      <p className="mt-3 text-xs text-amber-700">
        FacilityComplianceHub.org and its sponsors assume no liability for
        actions taken based on the information presented on this site.
      </p>
    </div>
  );
}
