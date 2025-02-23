export const cleanOrgNumber = (organisationNumber: string | null) => {
  if (organisationNumber === null){return ""} 
    const formatted =
    organisationNumber.slice(0, 6) + "-" + organisationNumber.slice(-4);
  return formatted;
};
