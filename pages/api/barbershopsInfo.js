const handler = (req, res) => {
  const barbershops = {
    branches: 294,
    countries: 11,
    capitals: 7,
  };

  res.status(200).json({
    success: true,
    branchesTotal: barbershops.branches,
    countriesTotal: barbershops.countries,
    capitalsTotal: barbershops.capitals,
  });
};

export default handler;
