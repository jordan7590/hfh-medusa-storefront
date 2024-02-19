import { Text, clx } from "@medusajs/ui";
import { getCategoriesList, getCollectionsList } from "@lib/data";
import { useEffect, useState } from "react";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

export default function LeftsideBar() {
  const [productCategories, setProductCategories] = useState([]);
  const [productCollections, setProductCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await getCategoriesList();
        const collectionsResponse = await getCollectionsList();
        setProductCategories(categoriesResponse.product_categories);
        setProductCollections(collectionsResponse.collections);
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading to false even if an error occurs
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {productCategories && productCategories.length > 0 && (
            <div className="flex flex-col gap-y-2 collection-filter-block">
              <span className="txt-small-plus txt-ui-fg-base collapse-block-title">
                Categories
              </span>
              <ul className="grid grid-cols-1 gap-2">
                {productCategories.slice(0, 6).map((c) => {
                  if (c.parent_category) {
                    return null;
                  }

                  const children =
                    c.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || null;

                  return (
                    <li
                      className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                      key={c.id}
                    >
                      <LocalizedClientLink
                        className={clx(
                          "hover:text-ui-fg-base",
                          children && "txt-small-plus"
                        )}
                        href={`/categories/${c.handle}`}
                      >
                        - {c.name}
                      </LocalizedClientLink>
                      {children && (
                        <ul className="grid grid-cols-1 ml-3 gap-2">
                          {children.map((child) => (
                            <li key={child.id}>
                              <LocalizedClientLink
                                className="hover:text-ui-fg-base"
                                href={`/categories/${child.handle}`}
                              >
                                - {child.name}
                              </LocalizedClientLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {productCollections && productCollections.length > 0 && (
            <div className="flex flex-col gap-y-2 collection-filter-block">
              <span className="txt-small-plus txt-ui-fg-base collapse-block-title">
                Collections
              </span>
              <ul
                className={clx(
                  "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                  {
                    "grid-cols-2": productCollections.length > 3,
                  }
                )}
              >
                {productCollections.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base txt-small-plus"
                      href={`/collections/${c.handle}`}
                    >
                    - {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
