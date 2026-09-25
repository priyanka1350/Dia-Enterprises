import { CategoryPage } from './CategoryPage';

export function PaperPlateRawMaterials() {
  return (
    <CategoryPage
      title="Paper Plate Raw Materials Supplier in India | Dia Enterprise"
      h1="Paper Plate Raw Materials Supplier in India"
      description="Dia Enterprise is a leading supplier of paper plate raw materials across India. We provide high-quality materials including silver paper, kraft paper, and chipboard essential for manufacturing durable paper plates."
      slug="paper-plate-raw-materials"
      whatItIs="Paper plate raw materials are the foundational papers and boards used in the production of disposable paper plates, including various GSMs of silver-coated paper, kraft paper, and chipboard."
      whatItIsUsedFor="These materials are used in automated or manual paper plate making machines to press, shape, and cut disposable plates for food serving, catering, and events."
      relationToManufacturing="High-quality raw materials are crucial for paper plate manufacturing to ensure the final product has the right strength, finish, and durability to hold food without leaking or bending."
      suitableFor={["Paper plate manufacturers", "Disposable tableware producers", "Bulk suppliers in India", "Catering product businesses"]}
      bulkSupply={true}
      productFilter={() => true} // all products
    />
  );
}

export function SilverPaper() {
  return (
    <CategoryPage
      title="Silver Paper for Paper Plates | Silver Paper Supplier India"
      h1="Silver Paper for Paper Plate Manufacturing"
      description="Dia Enterprise supplies premium silver paper for paper plates across India. Our silver paper is available in various GSMs to meet your specific paper plate manufacturing requirements."
      slug="silver-paper"
      whatItIs="Silver paper is a specialized coated paper featuring a reflective, hygienic silver finish, available in various thicknesses (GSM) from 80 GSM to 200 GSM."
      whatItIsUsedFor="It is specifically used to manufacture disposable silver paper plates, which are widely popular for parties, events, and everyday food serving in India."
      relationToManufacturing="In paper plate manufacturing, silver paper provides the necessary barrier and aesthetic finish. The GSM (grams per square meter) determines the rigidity and strength of the final plate."
      suitableFor={["Manufacturers of silver paper plates", "Event and party supply producers", "Catering tableware manufacturers"]}
      bulkSupply={true}
      productFilter={(product) => product.name.toLowerCase().includes('silver')}
    />
  );
}

export function KraftPaper() {
  return (
    <CategoryPage
      title="Kraft Paper Supplier for Paper Plates | Dia Enterprise"
      h1="Kraft Paper for Paper Plate Manufacturing"
      description="Source sturdy kraft paper for paper plates from Dia Enterprise. We supply high-quality kraft paper raw materials for heavy-duty and eco-friendly paper plate production."
      slug="kraft-paper"
      whatItIs="Kraft paper is a strong, durable, and naturally brown paper product that provides excellent structural integrity, making it ideal for sturdy applications."
      whatItIsUsedFor="It is used to produce robust, heavy-duty disposable paper plates that need to support heavier foods without bending or breaking."
      relationToManufacturing="Kraft paper is often used as a base or combined with other materials like chipboard in the manufacturing process to give the paper plate maximum strength and stability."
      suitableFor={["Heavy-duty paper plate manufacturers", "Eco-friendly tableware producers", "Sturdy catering plate manufacturers"]}
      bulkSupply={true}
      productFilter={(product) => product.name.toLowerCase().includes('kraft')}
    />
  );
}

export function Chipboard() {
  return (
    <CategoryPage
      title="Chipboard Supplier for Paper Plate Manufacturing | Dia Enterprise"
      h1="Chipboard for Paper Plate Manufacturing"
      description="Dia Enterprise supplies durable chipboard for paper plate manufacturing. Enhance the strength and rigidity of your disposable plates with our high-quality chipboard."
      slug="chipboard"
      whatItIs="Chipboard is a thick, rigid paperboard made from reclaimed paper stock. It is known for its thickness and structural strength."
      whatItIsUsedFor="In the disposable tableware industry, chipboard is used to manufacture highly rigid plates and bases that require significant support, often used for buffet plates or thalis."
      relationToManufacturing="Chipboard serves as the rigid core or base layer in paper plate manufacturing, allowing manufacturers to produce heavy-duty plates that mimic the strength of reusable tableware."
      suitableFor={["Manufacturers of heavy-duty thali plates", "Premium disposable tableware producers", "Buffet plate manufacturers"]}
      bulkSupply={true}
      productFilter={(product) => product.name.toLowerCase().includes('chipboard')}
    />
  );
}

export function PaperPlates() {
  return (
    <CategoryPage
      title="Paper Plates Supplier in India | Dia Enterprise"
      h1="Paper Plates Supplier in India"
      description="Dia Enterprise is a trusted paper plates supplier in India, offering a wide range of disposable plates including silver plates, thali plates, and heavy-duty catering plates."
      slug="paper-plates"
      whatItIs="Paper plates are disposable tableware items made from various grades of paper, including silver-coated, kraft, and chipboard materials."
      whatItIsUsedFor="They are used for serving food at events, parties, catering services, street food stalls, and for everyday convenience across India."
      relationToManufacturing="As both a raw material supplier and a provider of finished paper plates, we understand the complete manufacturing lifecycle, ensuring that our finished plates meet the highest standards of durability and finish."
      suitableFor={["Event organizers and caterers", "Wholesale distributors", "Retail businesses", "Food service operators"]}
      bulkSupply={true}
      productFilter={() => true}
    />
  );
}
