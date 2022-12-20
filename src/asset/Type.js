import miniatureNormal from "./TypeMiniature/normal.png";
import iconNormal from "./TypeIcon/normal.png";
import miniatureCombat from "./TypeMiniature/combat.png";
import iconCombat from "./TypeIcon/combat.png";
import miniatureVol from "./TypeMiniature/vol.png";
import iconVol from "./TypeIcon/vol.png";
import miniaturePoison from "./TypeMiniature/poison.png";
import iconPoison from "./TypeIcon/poison.png";
import miniatureSol from "./TypeMiniature/sol.png";
import iconSol from "./TypeIcon/sol.png";
import miniatureRoche from "./TypeMiniature/roche.png";
import iconRoche from "./TypeIcon/roche.png";
import miniatureInsecte from "./TypeMiniature/insecte.png";
import iconInsecte from "./TypeIcon/insecte.png";
import miniatureSpectre from "./TypeMiniature/spectre.png";
import iconSpectre from "./TypeIcon/spectre.png";
import miniatureAcier from "./TypeMiniature/acier.png";
import iconAcier from "./TypeIcon/acier.png";
import miniatureFeu from "./TypeMiniature/feu.png";
import iconFeu from "./TypeIcon/feu.png";
import miniatureEau from "./TypeMiniature/eau.png";
import iconEau from "./TypeIcon/eau.png";
import miniaturePlante from "./TypeMiniature/plante.png";
import iconPlante from "./TypeIcon/plante.png";
import miniatureElectrik from "./TypeMiniature/electrik.png";
import iconElectrik from "./TypeIcon/electrik.png";
import miniaturePsy from "./TypeMiniature/psy.png";
import iconPsy from "./TypeIcon/psy.png";
import miniatureGlace from "./TypeMiniature/glace.png";
import iconGlace from "./TypeIcon/glace.png";
import miniatureDragon from "./TypeMiniature/dragon.png";
import iconDragon from "./TypeIcon/dragon.png";
import miniatureTenebres from "./TypeMiniature/tenebres.png";
import iconTenebres from "./TypeIcon/tenebres.png";
import miniatureFee from "./TypeMiniature/fee.png";
import iconFee from "./TypeIcon/fee.png";

export const type = [
	/*default :
	{
		Name: "",
		miniature: "",
		icon: "",
		weakness: [],
		resistance: [],
		immunity: [],
		strengthTo: [],
		weaknessTo: [],
		uselessTo: [],
	},*/
	// Normal
	{
		name: "normal",
		miniature: miniatureNormal,
		icon: iconNormal,
		weakness: ["combat"],
		resistance: [],
		immunity: ["spectre"],
		strengthTo: ["acier", "roche"],
		weaknessTo: [],
		uselessTo: ["spectre"],
	},
	// Combat
	{
		name: "combat",
		miniature: miniatureCombat,
		icon: iconCombat,
		weakness: ["vol", "psy", "fée"],
		resistance: ["insecte", "roche", "ténèbres"],
		immunity: [],
		strengthTo: ["normal", "glace", "roche", "acier", "ténèbres"],
		weaknessTo: ["poison", "vol", "psy", "fée", "insecte"],
		uselessTo: ["spectre"],
	},
	// Vol
	{
		name: "vol",
		miniature: miniatureVol,
		icon: iconVol,
		weakness: ["electrik", "glace", "roche"],
		resistance: ["combat", "plante", "insecte"],
		immunity: ["sol"],
		strengthTo: ["combat", "plante", "insecte"],
		weaknessTo: ["electrik", "acier", "roche"],
		uselessTo: [],
	},
	// Poison
	{
		name: "poison",
		miniature: miniaturePoison,
		icon: iconPoison,
		weakness: ["sol", "psy"],
		resistance: ["combat", "fée", "insecte", "plante", "poison"],
		immunity: [],
		strengthTo: ["plante", "fée"],
		weaknessTo: ["poison", "sol", "roche", "spectre"],
		uselessTo: ["acier"],
	},
	// Sol
	{
		name: "sol",
		miniature: miniatureSol,
		icon: iconSol,
		weakness: ["eau", "plante", "glace"],
		resistance: ["poison", "roche"],
		immunity: ["electrik"],
		strengthTo: ["poison", "roche", "acier", "feu", "electrik"],
		weaknessTo: ["plante", "insecte"],
		uselessTo: ["vol"],
	},
	// Roche
	{
		name: "roche",
		miniature: miniatureRoche,
		icon: iconRoche,
		weakness: ["combat", "sol", "acier", "eau", "plante"],
		resistance: ["normal", "feu", "poison", "vol"],
		immunity: [],
		strengthTo: ["glace", "feu", "insecte", "vol"],
		weaknessTo: ["combat", "sol", "acier"],
		uselessTo: [],
	},
	// Insecte
	{
		name: "insecte",
		miniature: miniatureInsecte,
		icon: iconInsecte,
		weakness: ["feu", "vol", "roche"],
		resistance: ["combat", "plante", "sol"],
		immunity: [],
		strengthTo: ["plante", "psy", "ténèbres"],
		weaknessTo: ["acier", "feu", "combat", "fée", "vol", "poison", "spectre"],
		uselessTo: [],
	},
	// Spectre
	{
		name: "spectre",
		miniature: miniatureSpectre,
		icon: iconSpectre,
		weakness: ["spectre", "ténèbres"],
		resistance: ["poison", "insecte"],
		immunity: ["normal", "combat"],
		strengthTo: ["spectre", "psy"],
		weaknessTo: ["ténèbres"],
		uselessTo: ["normal"],
	},
	// Acier
	{
		name: "acier",
		miniature: miniatureAcier,
		icon: iconAcier,
		weakness: ["feu", "combat", "sol"],
		resistance: ["acier", "dragon", "fée", "glace", "insecte", "normal", "plante", "psy", "roche", "vol"],
		immunity: ["poison"],
		strengthTo: ["glace", "roche", "fée"],
		weaknessTo: ["acier", "feu", "eau", "electrik"],
		uselessTo: [],
	},
	// Feu
	{
		name: "feu",
		miniature: miniatureFeu,
		icon: iconFeu,
		weakness: ["eau", "sol", "roche"],
		resistance: ["acier", "feu", "glace", "plante", "insecte", "fée"],
		immunity: [],
		strengthTo: ["plante", "glace", "insecte", "acier"],
		weaknessTo: ["eau", "feu", "roche", "dragon"],
		uselessTo: [],
	},
	// Eau
	{
		name: "eau",
		miniature: miniatureEau,
		icon: iconEau,
		weakness: ["plante", "electrik"],
		resistance: ["acier", "feu", "glace", "eau"],
		immunity: [],
		strengthTo: ["sol", "roche", "feu"],
		weaknessTo: ["eau", "plante", "dragon"],
		uselessTo: [],
	},
	// Plante
	{
		name: "plante",
		miniature: miniaturePlante,
		icon: iconPlante,
		weakness: ["feu", "glace", "insecte", "vol", "poison"],
		resistance: ["sol", "eau", "electrik", "plante"],
		immunity: [],
		strengthTo: ["sol", "roche", "eau"],
		weaknessTo: ["acier", "dragon", "feu", "insecte", "plante", "poison", "vol"],
		uselessTo: [],
	},
	// Electrik
	{
		name: "electrik",
		miniature: miniatureElectrik,
		icon: iconElectrik,
		weakness: ["sol"],
		resistance: ["vol", "electrik", "acier"],
		immunity: [],
		strengthTo: ["vol", "eau"],
		weaknessTo: ["electrik", "plante", "dragon"],
		uselessTo: ["sol"],
	},
	// Psy
	{
		name: "psy",
		miniature: miniaturePsy,
		icon: iconPsy,
		weakness: ["spectre", "ténèbres", "insecte"],
		resistance: ["combat", "psy"],
		immunity: [],
		strengthTo: ["combat", "poison"],
		weaknessTo: ["psy", "acier"],
		uselessTo: ["ténèbres"],
	},
	// Glace
	{
		name: "glace",
		miniature: miniatureGlace,
		icon: iconGlace,
		weakness: ["feu", "combat", "roche", "acier"],
		resistance: ["glace"],
		immunity: [],
		strengthTo: ["sol", "vol", "plante", "dragon"],
		weaknessTo: ["acier", "feu", "eau", "glace"],
		uselessTo: [],
	},
	// Dragon
	{
		name: "dragon",
		miniature: miniatureDragon,
		icon: iconDragon,
		weakness: ["dragon", "glace", "fée"],
		resistance: ["feu", "eau", "electrik", "plante"],
		immunity: [],
		strengthTo: ["dragon"],
		weaknessTo: ["acier"],
		uselessTo: ["fée"],
	},
	// Ténèbres
	{
		name: "ténèbres",
		miniature: miniatureTenebres,
		icon: iconTenebres,
		weakness: ["combat", "fée", "insecte"],
		resistance: ["spectre", "ténèbres"],
		immunity: ["psy"],
		strengthTo: ["spectre", "psy"],
		weaknessTo: ["combat", "fée", "ténèbres"],
		uselessTo: [],
	},
	// Fee
	{
		name: "fée",
		miniature: miniatureFee,
		icon: iconFee,
		weakness: ["poison", "acier"],
		resistance: ["combat", "insecte", "ténèbres"],
		immunity: ["dragon"],
		strengthTo: ["combat", "dragon", "ténèbres"],
		weaknessTo: ["feu", "poison", "acier"],
		uselessTo: [],
	}
];

