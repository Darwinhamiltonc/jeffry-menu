import React from "react";
import styles from "./PizzaMenu.module.css";
import { menuItems, type MenuItem } from "./menuData";

interface PizzaMenuProps {
  brandName?: string;
  siteUrl?: string;
  tagline?: string;
  heroImageUrl?: string;
  items?: MenuItem[];
}

export default function PizzaMenu({
  brandName = "Pizza\nFiesta",
  siteUrl = "www.pizzafiesta.com",
  tagline = "Hecha con fuego, servida con orgullo",
  heroImageUrl = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
  items = menuItems,
}: PizzaMenuProps) {
  const handlePrint = () => window.print();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.brandBand}>
          <svg
            className={styles.sliceIcon}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10 L88 78 A42 42 0 0 1 12 78 Z"
              stroke="white"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="45" r="3.5" fill="white" />
            <circle cx="38" cy="58" r="3" fill="white" />
            <circle cx="62" cy="60" r="3" fill="white" />
          </svg>
          <h1 className={styles.brandTitle}>
            {brandName.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
        </div>

        <div
          className={styles.heroPhoto}
          style={{ backgroundImage: `url('${heroImageUrl}')` }}
        >
          <div className={styles.crustEdge} />
        </div>
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
