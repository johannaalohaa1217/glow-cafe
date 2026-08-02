import { useMemo, useState } from "react";
import menuItems from "../data/menuItems";
import Reveal from "./Reveal";
import "./Menu.css";

const FILTERS = ["All", "Espresso", "Filter", "Cold", "Tea", "Bakery"];

export default function Menu() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? menuItems : menuItems.filter((m) => m.category === filter)),
    [filter]
  );

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <Reveal as="div" className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            The Menu
          </p>
          <h2>Eight cups worth reordering</h2>
          <p>
            Everything is made to order, dairy-free by request, and paired well with
            whatever's fresh out of the oven that morning.
          </p>
        </Reveal>

        <Reveal as="div" delay={60} className="menu-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-pill ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="menu-grid reveal-stagger">
          {visible.map((item, i) => (
            <Reveal as="article" className="menu-card" delay={(i % 4) * 70} key={item.id}>
              <div className="menu-card-media">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span className="menu-card-tag">{item.category}</span>
              </div>
              <div className="menu-card-body">
                <div className="menu-card-top">
                  <h3>{item.name}</h3>
                  <span className="menu-card-price mono">${item.price.toFixed(2)}</span>
                </div>
                <p>{item.description}</p>
                <button className="btn btn-ghost btn-sm menu-order-btn">Order</button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
