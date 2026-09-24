// Branded, printable NFPA 110 generator test log.
// Each form renders as its own "sheet": on screen as a paper card, in print
// as one landscape page (see the .log-sheets print rules in globals.css).

interface Column {
  label: string;
  hint?: string;
  /** Relative width; defaults to 1 */
  w?: number;
}

interface LogForm {
  title: string;
  cadence: string;
  reference: string;
  period: string;
  rows: number;
  /** Taller rows for forms with long entries */
  tall?: boolean;
  columns: Column[];
}

const infoFields = [
  "Facility name",
  "Address",
  "Generator ID and location",
  "Manufacturer, model, serial no.",
  "Nameplate rating (standby kW)",
  "30% of nameplate (kW)",
  "Fuel type",
  "EPSS Level and Class",
  "Mfr. minimum exhaust temperature",
  "Transfer switch IDs and locations",
  "Date placed in service",
  "Service vendor and phone",
];

const forms: LogForm[] = [
  {
    title: "Weekly Inspection Log",
    cadence: "Weekly",
    reference: "NFPA 110 weekly EPSS inspection",
    period: "Quarter / Year",
    rows: 13,
    columns: [
      { label: "Date and time", w: 1.1 },
      { label: "Fuel level", hint: "main / day tank" },
      { label: "Oil and coolant", hint: "levels OK" },
      { label: "Block heater", hint: "and battery charger OK" },
      { label: "Battery", hint: "voltage and condition" },
      { label: "Leaks, belts,", hint: "hoses, exhaust" },
      { label: "Initials and notes", w: 1.5 },
    ],
  },
  {
    title: "Monthly Load Test Log",
    cadence: "Monthly",
    reference: "NFPA 110 monthly exercise under load",
    period: "Year",
    rows: 12,
    columns: [
      { label: "Date", hint: "and ATS used to start", w: 1.1 },
      { label: "Hour meter", hint: "start / stop" },
      { label: "Minutes", hint: "under load", w: 0.8 },
      { label: "Load kW", hint: "(% of nameplate)" },
      { label: "Exhaust temp", w: 0.9 },
      { label: "Oil pressure", hint: "/ coolant temp" },
      { label: "Initials and issues", w: 1.5 },
    ],
  },
  {
    title: "Transfer Switch Monthly Test Log",
    cadence: "Monthly",
    reference: "NFPA 110 monthly transfer switch operation",
    period: "Year",
    rows: 12,
    columns: [
      { label: "Date", w: 0.9 },
      { label: "ATS ID", hint: "and location", w: 1.2 },
      { label: "Transfer time", hint: "(seconds)" },
      { label: "Retransfer", hint: "delay (min)" },
      { label: "Cooldown", hint: "(min)", w: 0.8 },
      { label: "Result", hint: "pass / fail", w: 0.8 },
      { label: "Initials and notes", w: 1.5 },
    ],
  },
  {
    title: "Annual and 36-Month Test Record",
    cadence: "Annual / 36-month",
    reference: "NFPA 110 supplemental load test and 36-month test",
    period: "Years covered",
    rows: 6,
    tall: true,
    columns: [
      { label: "Date", w: 0.9 },
      { label: "Test type", hint: "annual / 36-month / combined", w: 1.2 },
      { label: "Load steps", hint: "% and minutes", w: 1.2 },
      { label: "Total continuous", hint: "duration" },
      { label: "Load source", hint: "building / load bank" },
      { label: "Result", hint: "and report attached" },
      { label: "Performed by", hint: "name, company", w: 1.3 },
    ],
  },
  {
    title: "Deficiencies and Corrective Actions",
    cadence: "As found",
    reference: "Record every deficiency through verified repair",
    period: "Year",
    rows: 10,
    columns: [
      { label: "Date found", w: 0.9 },
      { label: "Equipment" },
      { label: "Condition found", w: 1.5 },
      { label: "Corrective action", hint: "and parts replaced", w: 1.6 },
      { label: "Date corrected", w: 0.9 },
      { label: "Post-repair test", w: 0.9 },
      { label: "Verified by" },
    ],
  },
];

const TOTAL = forms.length + 1;

function BrandMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary-700 text-white">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      </div>
      <div className="leading-tight">
        <p className="text-[13px] font-bold text-gray-900">Facility Compliance Hub</p>
        <p className="text-[10px] text-gray-500">facilitycompliancehub.org</p>
      </div>
    </div>
  );
}

function SheetHeader({
  n,
  title,
  cadence,
  reference,
}: {
  n: number;
  title: string;
  cadence: string;
  reference: string;
}) {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <BrandMark />
        <div className="text-right">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-700">
            NFPA 110 Generator Test Log
          </p>
          <p className="text-[10px] text-gray-500">
            Form {n} of {TOTAL}
          </p>
        </div>
      </div>
      <div className="log-titlebar mt-3 flex items-center justify-between gap-4 rounded-md border-l-4 border-teal-500 bg-primary-900 px-4 py-2.5 text-white">
        <h3 className="m-0 text-base font-bold tracking-tight text-white">{title}</h3>
        <div className="flex flex-shrink-0 items-center gap-2 text-[10px]">
          <span className="rounded-full bg-teal-500/25 px-2 py-0.5 font-semibold uppercase tracking-wider text-teal-200">
            {cadence}
          </span>
          <span className="hidden text-primary-100 sm:inline">{reference}</span>
        </div>
      </div>
    </>
  );
}

function FillLine({ label, grow = 1 }: { label: string; grow?: number }) {
  return (
    <div className="flex min-w-0 items-end gap-2" style={{ flexGrow: grow }}>
      <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </span>
      <span className="mb-0.5 h-px flex-1 bg-gray-400" />
    </div>
  );
}

function SheetFooter() {
  return (
    <div className="log-footer mt-4 border-t border-gray-200 pt-3">
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        <FillLine label="Reviewed by" grow={2} />
        <FillLine label="Signature" grow={2} />
        <FillLine label="Date" />
      </div>
      <div className="mt-3 flex items-center justify-between text-[9px] text-gray-400">
        <span>Confirm required records and retention with your AHJ and accreditor.</span>
        <span>Free form from FacilityComplianceHub.org</span>
      </div>
    </div>
  );
}

function InfoSheet() {
  return (
    <section className="log-sheet">
      <SheetHeader
        n={1}
        title="Facility and Generator Information"
        cadence="Keep with log"
        reference="Fill out once per generator"
      />
      <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        {infoFields.map((f) => (
          <div key={f}>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">{f}</p>
            <div className="log-fill mt-1 h-6 border-b border-gray-400" />
          </div>
        ))}
      </div>
      <div className="mt-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Notes</p>
        <div className="log-fill mt-1 h-6 border-b border-gray-400" />
        <div className="log-fill h-6 border-b border-gray-400" />
      </div>
      <SheetFooter />
    </section>
  );
}

function FormSheet({ form, n }: { form: LogForm; n: number }) {
  const totalW = form.columns.reduce((s, c) => s + (c.w ?? 1), 0);
  return (
    <section className="log-sheet">
      <SheetHeader n={n} title={form.title} cadence={form.cadence} reference={form.reference} />
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        <FillLine label="Facility" grow={3} />
        <FillLine label="Generator ID" grow={2} />
        <FillLine label={form.period} grow={1} />
      </div>
      <div className="log-table-wrap mt-3 overflow-x-auto">
        <table className={`log-table ${form.tall ? "log-table-tall" : ""}`}>
          <colgroup>
            {form.columns.map((c) => (
              <col key={c.label} style={{ width: `${(((c.w ?? 1) / totalW) * 100).toFixed(1)}%` }} />
            ))}
          </colgroup>
          <thead>
            <tr>
              {form.columns.map((c) => (
                <th key={c.label}>
                  {c.label}
                  {c.hint && <span>{c.hint}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: form.rows }, (_, r) => (
              <tr key={r}>
                {form.columns.map((c) => (
                  <td key={c.label} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SheetFooter />
    </section>
  );
}

export default function GeneratorTestLog() {
  return (
    <div className="log-sheets not-prose my-8 space-y-8">
      <InfoSheet />
      {forms.map((f, i) => (
        <FormSheet key={f.title} form={f} n={i + 2} />
      ))}
    </div>
  );
}
