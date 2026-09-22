# Bundled XML Schemas

Example schemas for the AI Designer's XSD import (**Open Schema Example…** in the Open menu). Each opens as a new
design converted into models (`AiDesignerWindow.Xsd.cs`).

| File | Source | Licence |
|---|---|---|
| `client.xsd` | [mganss/XmlSchemaClassGenerator](https://github.com/mganss/XmlSchemaClassGenerator), `XmlSchemaClassGenerator.Tests/xsd/client/client.xsd` (fetched 2026-09-19, unmodified) | Apache License 2.0 |
| `EPP/domain-1.0.xsd`, `EPP/host-1.0.xsd`, `EPP/epp-1.0.xsd`, `EPP/eppcom-1.0.xsd` | The IETF Extensible Provisioning Protocol schemas (RFC 5730 protocol and common types, RFC 5731 domain mapping, RFC 5732 host mapping), as carried at `XmlSchemaClassGenerator.Tests/xsd/epp/` (fetched 2026-09-19, unmodified). `EPP/host-info-example.xml` is RFC 5732's own info-response example (section 3.1.2, the host ns1.example.com), lifted out of its `<epp><response><resData>` envelope and otherwise unchanged; it validates against `host-1.0.xsd` | IETF code components, available under the Simplified BSD License (IETF Trust Legal Provisions) |
| `FHIR/patient.xsd`, `FHIR/fhir-base.xsd`, `FHIR/patient-example.xml` | HL7 FHIR R4 (https://hl7.org/fhir/R4/patient.xsd and fhir-base.xsd, fetched 2026-09-19, unmodified). `fhir-base.xsd` includes `fhir-all.xsd` (every resource) and imports `xml.xsd` / `fhir-xhtml.xsd`; those are deliberately NOT bundled — the example brings in only the datatypes Patient uses, and leaves Extension, Narrative and ResourceContainer as names. `patient-example.xml` is FHIR's sample Patient record (https://hl7.org/fhir/R4/patient-example.xml), unmodified | Copyright (c) 2011+, HL7, Inc.; BSD-style licence, reproduced in the header of each file |
| `Bible/bible.xsd`, `Bible/kjv-excerpt.xml` | `bible.xsd` was written for UFOS (2026-09-19) to describe the [Beblia Holy Bible XML Format](https://github.com/Beblia/Holy-Bible-XML-Format), which ships none. `kjv-excerpt.xml` is Genesis 1:1-5, Psalm 23 and John 3:16 taken unchanged from its `EnglishKJBible.xml`, and validates against `bible.xsd` | The King James Version (1611) is in the public domain. Only public-domain translations may be used: the collection also holds copyrighted ones (NIV, ESV…), and the repository has no licence file |
| `ts-api_2_8.xsd` | Tableau Server REST API 2.8 schema, as carried in the same repository at `XmlSchemaClassGenerator.Tests/xsd/ts-api/ts-api_2_8.xsd` (fetched 2026-09-19, unmodified) | Published by Tableau for its REST API; the file carries no licence text of its own. Used here as a sample of a public API schema. |

XmlSchemaClassGenerator is Copyright (c) Michael Ganss and contributors, licensed under the Apache License,
Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0). The file is redistributed unmodified.

A bundled schema's imports are resolved from the same folder (`UmlWindow.MergeXsdImportsAsync`): only the declarations it uses are brought in.
