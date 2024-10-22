import { SuppliersModelMongoose } from "../src/dtos/models/suppliers-model";

export async function seedSuppliers() {
  const suppliers = [
    {
      name: "Neoenergia",
      logo: "https://yt3.googleusercontent.com/BX4A8DQyZTmmRSeGf_jKdv8XS-KWZQflaec4Kx9VvCNagE93XuvTb-QJLkBUMB27AawzonRPpw=s160-c-k-c0x00ffffff-no-rj",
      state: "GO",
      costPerKwh: 0.5,
      minKwh: 1000,
      totalClients: 150,
      averageRating: 4,
    },
    {
      name: "Voltalia",
      logo: "https://yt3.googleusercontent.com/OivMtuSBal_n1ZnW_J8Jb_n3O57lsFDdKtq_E2ID8Aq5Xo1vB3hny2yiZeVNNLd-6xznIsbCNA=s160-c-k-c0x00ffffff-no-rj",
      state: "RJ",
      costPerKwh: 2.3,
      minKwh: 2510,
      totalClients: 200,
      averageRating: 4.5,
    },
    {
      name: "Serena",
      logo: "https://yt3.googleusercontent.com/GvBTHswPZ0oIM419N0f1k2B3_LBoCv3CyKRsv-T6J0d_yPye_kPApfK1QxtqMgw_o3dBh_94=s160-c-k-c0x00ffffff-no-rj",
      state: "SP",
      costPerKwh: 0.4,
      minKwh: 1575,
      totalClients: 135,
      averageRating: 3.7,
    },
    {
      name: "Enel Green Power",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_mzAwkGl9yZyhIa96U5P8HdyE97Q2NBBZc7WpRwbkIZrQ=s160-c-k-c0x00ffffff-no-rj",
      state: "TO",
      costPerKwh: 1.4,
      minKwh: 4500,
      totalClients: 420,
      averageRating: 4.3,
    },
    {
      name: "Equinor",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_lvPHE12SBXFaTXmnXwkC1Sdz8LFifckjEH6yJrWwzn1Q=s160-c-k-c0x00ffffff-no-rj",
      state: "SC",
      costPerKwh: 2.7,
      minKwh: 3900,
      totalClients: 239,
      averageRating: 3.9,
    },
    {
      name: "Prime Energy",
      logo: "https://yt3.googleusercontent.com/kIuFPgZb3kt6BDEe9LXQ09bm4m1688a87nrp3BJTEz5HhPXZCLiIRUNW0ljgxhfIEmCRqAax=s160-c-k-c0x00ffffff-no-rj",
      state: "AL",
      costPerKwh: 4.5,
      minKwh: 3500,
      totalClients: 95,
      averageRating: 2.1,
    },
    {
      name: "Casa dos Ventos",
      logo: "https://yt3.googleusercontent.com/jyJLMB3bdX6OTUQMW_I_gyuP9HYBleVTneK1I6AelShrnLe48c2WPwRnQTDcC9OoL54kB050pg=s160-c-k-c0x00ffffff-no-rj",
      state: "AC",
      costPerKwh: 1.4,
      minKwh: 1500,
      totalClients: 275,
      averageRating: 2.3,
    },
    {
      name: "Ideali Energia",
      logo: "https://yt3.googleusercontent.com/wpHwTvXWEyzvBY3_SPnq9f_ZaZgt-OOeljP1T5B83-CP1zcPy-VNS4_r5Vr_KMFJ8lyZ05iAqL4=s160-c-k-c0x00ffffff-no-rj",
      state: "MA",
      costPerKwh: 1.7,
      minKwh: 1200,
      totalClients: 215,
      averageRating: 4.9,
    },
    {
      name: "Luz",
      logo: "https://yt3.googleusercontent.com/fO8XggmBaY2tbJph_sJVuDdQzjGpOcXHUs7Gw7GfyJfNCbAL8jiT6qZ5IKTYn5j9-9bVlGScHA=s160-c-k-c0x00ffffff-no-rj",
      state: "ES",
      costPerKwh: 2.8,
      minKwh: 900,
      totalClients: 236,
      averageRating: 3.3,
    },
    {
      name: "Topsun",
      logo: "https://media.licdn.com/dms/image/C4D0BAQFY1lw2PVpORw/company-logo_200_200/0/1630472608444/topsun_energia_solar_logo?e=2147483647&v=beta&t=N0w9HcTfI3HPsIBAMUf1ebpAsfUSHRnSbF943mQ8078",
      state: "PB",
      costPerKwh: 1.8,
      minKwh: 1400,
      totalClients: 430,
      averageRating: 3.5,
    },
    {
      name: "Helia Solar",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_nYRMTvjxOzQLQC632gueA8WLU5CQXCrqr63S0rs4aJcg=s160-c-k-c0x00ffffff-no-rj",
      state: "CE",
      costPerKwh: 1.3,
      minKwh: 1700,
      totalClients: 580,
      averageRating: 4.7,
    },
    {
      name: "Órigo Energia",
      logo: "https://yt3.googleusercontent.com/ilEjcAiq7oED0ZKLnyHezPVKZHTknvX_mgGbE-Ma9eNSMTiMMM7FdBIAz6JdyY5o9CzCLp93LQ=s160-c-k-c0x00ffffff-no-rj",
      state: "SE",
      costPerKwh: 2.7,
      minKwh: 1800,
      totalClients: 90,
      averageRating: 2.5,
    },
  ];

  await SuppliersModelMongoose.insertMany(suppliers);
  console.log("✅ Suppliers inseridos com sucesso!");
}
