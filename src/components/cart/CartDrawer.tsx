'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/products';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, subtotal, totalCount } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isCartOpen ? styles.backdropOpen : ''}`}
        onClick={closeCart}
      />

      {/* Slide-over Drawer */}
      <aside className={`${styles.drawer} ${isCartOpen ? styles.drawerOpen : ''}`} aria-label="Shopping Cart">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Your Shopping Bag ({totalCount})</h2>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Close Cart">
            ✕
          </button>
        </div>

        {/* Free Shipping Banner */}
        <div className={styles.freeShipBanner}>
          ✦ Free Shipping on all Orders above ₹499 ✦
        </div>

        {/* Cart Items */}
        {items.length === 0 ? (
          <div className={styles.emptyState}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <p style={{ fontWeight: 500 }}>Your bag is currently empty</p>
            <Link href="/shop" onClick={closeCart} className="btn btn-primary" style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
              Explore Products
            </Link>
          </div>
        ) : (
          <div className={styles.itemsList}>
            {items.map((item) => (
              <div key={item.id} className={styles.itemCard}>
                <div className={styles.itemImg}>
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.itemDetails}>
                  <div>
                    <h3 className={styles.itemName}>{item.product.name}</h3>
                    {item.selectedSize && <p className={styles.itemMeta}>Size: {item.selectedSize}</p>}
                    <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
                  </div>
                  <div className={styles.itemActions}>
                    <div className={styles.qtyGroup}>
                      <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, -1)}>
                        -
                      </button>
                      <span className={styles.qtyNum}>{item.quantity}</span>
                      <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                    <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer & Checkout */}
        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotalRow}>
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Link
              href="/contact"
              onClick={closeCart}
              className={styles.checkoutBtn}
            >
              Proceed to Checkout • {formatPrice(subtotal)}
            </Link>
            <p className={styles.note}>Taxes calculated at checkout. Express delivery across India.</p>
          </div>
        )}
      </aside>
    </>
  );
}
