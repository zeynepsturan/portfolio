import { BadgeCheck, CalendarDays, ExternalLink, GraduationCap } from "lucide-react";
import Tag from "../../ui/Tag";
import CertificateIcon from "./CertificateIcon";

function Block({ title, children }) {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-800">{title}</h2>
      {children}
    </div>
  );
}

export default function CertificateDetail({ data: certificate }) {
  if (!certificate) return <div className="p-8 text-gray-700">Certificate not found</div>;

  const Icon = certificate.icon;

  return (
    <div className="mx-auto max-w-3xl p-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-blue-200 bg-blue-50">
          <CertificateIcon icon={Icon} className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.12em] text-blue-600">Certificate</p>
          <h1 className="text-2xl font-bold" style={{ color: "#111827" }}>
            {certificate.title}
          </h1>
        </div>
      </div>

      <div className="mb-6">
        {certificate.media?.type === "image" ? (
          <img
            src={certificate.media.src}
            alt={certificate.media.alt || certificate.title}
            className="h-64 w-full object-cover"
          />
        ) : certificate.link ? (
          <div className="flex min-h-44 flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <ExternalLink className="h-8 w-8" />
            </div>
            <p className="max-w-md text-sm text-gray-600">
              This certificate is available online and can be verified through the official provider.
            </p>
            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              {certificate.media?.label || "Open certificate link"}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <div className="flex min-h-44 items-center justify-center bg-gray-100 text-sm text-gray-500">
            No preview available for this certificate.
          </div>
        )}
      </div>

      <div className="space-y-6">
        <Block title="Overview">
          <p className="text-gray-700">{certificate.description}</p>
        </Block>

        <Block title="Issuer & Date">
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2">
              <BadgeCheck className="h-4 w-4 text-green-600" />
              <span>{certificate.issuer}</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2">
              <CalendarDays className="h-4 w-4 text-purple-600" />
              <span>{certificate.issueDate}</span>
            </div>
            {certificate.credentialId && (
              <div className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2">
                <GraduationCap className="h-4 w-4 text-sky-600" />
                <span>{certificate.credentialId}</span>
              </div>
            )}
          </div>
        </Block>

        <Block title="Skills Covered">
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </Block>

        <Block title="Details">
          <p className="text-gray-700">{certificate.details}</p>
        </Block>
      </div>
    </div>
  );
}
