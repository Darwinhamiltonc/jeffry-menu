import styles from "./PizzaMenu.module.css";
import { menuItems, type MenuItem } from "./menuData";



interface PizzaMenuProps {
  siteUrl?: string;
  tagline?: string;
  heroImageUrl?: string;
  items?: MenuItem[];
}

export default function PizzaMenu({

  siteUrl = "https://jeffry-menu.vercel.app/",
  tagline = "Hecha con fuego, servida con orgullo",
  heroImageUrl ="/public/image.png", 
  items = menuItems,
}: PizzaMenuProps) {
  const handlePrint = () => window.print();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <img className={styles.heroPhoto} src={heroImageUrl} alt="Hero" />
      </div>

          <h2 className={styles.menuTitle}>Especialidades de la Casa</h2>

      <div className={styles.menu}>
        {items.map((item) => (
          <MenuRow key={item.name} item={item} />
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.divider} />
        <div className={styles.site}>{siteUrl}</div>
        <div className={styles.tagline}>{tagline}</div>
      </div>

      <button
        className={styles.printBtn}
        onClick={handlePrint}
        aria-label="Imprimir menú"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z" />
        </svg>
        Imprimir
      </button>
    </div>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.itemInfo}>
        <div className={styles.itemName}>{item.name}</div>
        <div className={styles.itemDesc}>{item.description}</div>
      </div>

      <div className={styles.sizesTable}>
        {item.sizes.map((size) => (
          <div key={size.label} className={styles.sizeRow}>
            <span className={styles.sizeLabel}>{size.label}</span>
            <span className={styles.itemPieces}>{size.pieces}</span>
            <span className={styles.itemPrice}>{size.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
