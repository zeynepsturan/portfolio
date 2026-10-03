export default function CertificateIcon({ icon: Icon, className }) {
  if (typeof Icon === "string") {
    return <img src={Icon} alt="" className={`${className} object-contain`} />;
  }

  return Icon ? <Icon className={className} /> : null;
}
