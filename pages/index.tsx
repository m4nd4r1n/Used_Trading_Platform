import type { NextPage } from "next";
import FloatingButton from "@components/floating-button";
import Item from "@components/item";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import { Product } from "@prisma/client";
import useSWR, { SWRConfig } from "swr";
import client from "@libs/server/client";
import Link from "next/link";

export interface ProductWithCount extends Product {
  _count: {
    favs: number;
  };
}

interface ProductsResponse {
  ok: boolean;
  products: ProductWithCount[];
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductsResponse>("/api/products");

  return (
    <Layout title="홈" hasTabBar seoTitle="Home">
      {user?.manager && (
        <div className="flex justify-around border-b p-4">
          <Link href="/management/users">
            <a className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-400 text-white">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="603.726px"
                  height="603.726px"
                  viewBox="0 0 603.726 603.726"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          d="M545.085,82.467h-60.896V59.175c0-32.059-26.081-58.14-58.14-58.14H58.64c-32.059,0-58.14,26.082-58.14,58.14v403.944
				c0,32.059,26.082,58.141,58.14,58.141h60.896v23.293c0,32.057,26.082,58.139,58.14,58.139h367.408
				c32.059,0,58.141-26.082,58.141-58.139V140.607C603.226,108.548,577.144,82.467,545.085,82.467z M162.376,544.552v-23.293v-41.42
				h319.358h78.651v64.713c0,8.449-6.851,15.299-15.301,15.299H177.677C169.226,559.851,162.376,553.001,162.376,544.552z
				 M560.386,437h-76.197h-42.84H162.376v-38.592v-42.84V140.607c0-8.45,6.85-15.3,15.3-15.3h263.672h42.84h60.896
				c8.45,0,15.301,6.851,15.301,15.3V437z M43.34,59.175c0-8.45,6.85-15.3,15.3-15.3h367.409c8.45,0,15.3,6.85,15.3,15.3v23.292
				H177.677c-32.059,0-58.14,26.082-58.14,58.14v214.961H43.34V59.175z M58.64,478.419c-8.45,0-15.3-6.85-15.3-15.299v-64.713
				h76.196v80.012H58.64L58.64,478.419z"
                        />
                        <path
                          d="M545.085,603.191H177.677c-32.334,0-58.64-26.306-58.64-58.639v-22.793H58.64C26.306,521.759,0,495.454,0,463.119V59.175
				C0,26.84,26.306,0.535,58.64,0.535h367.409c32.334,0,58.64,26.306,58.64,58.64v22.792h60.396
				c32.335,0,58.641,26.306,58.641,58.64v403.945C603.726,576.885,577.42,603.191,545.085,603.191z M58.64,1.535
				C26.857,1.535,1,27.392,1,59.175v403.944c0,31.783,25.857,57.641,57.64,57.641h61.396v23.793
				c0,31.782,25.857,57.639,57.64,57.639h367.408c31.783,0,57.641-25.856,57.641-57.639V140.607c0-31.783-25.857-57.64-57.641-57.64
				h-61.396V59.175c0-31.783-25.857-57.64-57.64-57.64H58.64z M545.085,560.351H177.677c-8.712,0-15.8-7.087-15.8-15.799v-65.213
				h399.009v65.213C560.886,553.264,553.798,560.351,545.085,560.351z M162.876,480.339v64.213c0,8.16,6.64,14.799,14.8,14.799
				h367.408c8.161,0,14.801-6.639,14.801-14.799v-64.213H162.876z M120.037,478.919H58.64c-8.712,0-15.8-7.087-15.8-15.799v-65.213
				h77.196V478.919z M43.84,398.908v64.213c0,8.16,6.639,14.799,14.8,14.799h60.396v-79.012H43.84z M560.886,437.5H161.876V140.607
				c0-8.712,7.088-15.8,15.8-15.8h367.408c8.713,0,15.801,7.088,15.801,15.8V437.5z M162.876,436.5h397.009V140.607
				c0-8.161-6.64-14.8-14.801-14.8H177.677c-8.161,0-14.8,6.639-14.8,14.8V436.5z M120.037,356.068H42.84V59.175
				c0-8.712,7.088-15.8,15.8-15.8h367.409c8.712,0,15.8,7.088,15.8,15.8v23.792H177.677c-31.783,0-57.64,25.857-57.64,57.64V356.068
				z M43.84,355.068h75.196V140.607c0-32.334,26.306-58.64,58.64-58.64h263.172V59.175c0-8.161-6.639-14.8-14.8-14.8H58.64
				c-8.161,0-14.8,6.639-14.8,14.8V355.068z"
                        />
                      </g>
                      <g>
                        <path
                          d="M441.349,296.846c-3.561-3.924-7.443-7.568-11.617-10.877c-1.534-1.216-3.102-2.382-4.698-3.5
				c5.864-6.398,10.546-13.682,13.937-21.698c0.895-2.115,1.685-4.259,2.38-6.427c2.393-7.462,3.608-15.223,3.608-23.155
				s-1.215-15.692-3.608-23.155c-0.695-2.167-1.485-4.312-2.379-6.427c-3.828-9.051-9.3-17.17-16.263-24.133
				c-6.962-6.962-15.082-12.434-24.132-16.261c-9.393-3.973-19.346-5.987-29.582-5.987s-20.188,2.014-29.581,5.987
				c-9.051,3.828-17.171,9.299-24.133,16.261c-6.963,6.963-12.434,15.082-16.262,24.133c-3.973,9.393-5.987,19.345-5.987,29.582
				s2.015,20.189,5.987,29.582c3.39,8.017,8.072,15.3,13.937,21.698c-1.597,1.118-3.164,2.284-4.698,3.501
				c-16.89,13.39-29.037,32.248-34.203,53.099c-1.359,5.484-1.837,11.041-1.474,16.5c0.701,10.551,4.546,20.742,11.277,29.344
				c4.254,5.438,9.604,10.061,15.593,13.496c0.852,0.488,1.716,0.953,2.592,1.393c7.404,3.713,15.709,5.676,24.015,5.676h85.877
				c8.307,0,16.61-1.963,24.016-5.676c0.876-0.439,1.74-0.904,2.592-1.393c0.954-0.549,1.89-1.127,2.81-1.732
				c2.763-1.822,5.364-3.898,7.751-6.195c1.806-1.738,3.491-3.6,5.031-5.568c10.215-13.053,13.787-29.762,9.804-45.844
				C460.045,323.371,452.196,308.802,441.349,296.846z M368.994,198.064c18.293,0,33.123,14.83,33.123,33.123
				s-14.829,33.123-33.123,33.123s-33.124-14.83-33.124-33.123S350.7,198.064,368.994,198.064z M315.636,349.373
				c5.935-23.951,27.572-41.705,53.358-41.705c25.785,0,47.424,17.754,53.358,41.705c0.535,2.156,0.369,4.289-0.326,6.195
				c-1.479,4.051-5.366,7.068-10.094,7.068h-85.877c-4.728,0-8.616-3.018-10.095-7.068
				C315.266,353.662,315.102,351.529,315.636,349.373z"
                        />
                        <path
                          d="M411.933,405.976h-85.877c-8.383,0-16.765-1.981-24.239-5.729c-0.87-0.437-1.75-0.909-2.616-1.406
				c-6.03-3.458-11.472-8.169-15.738-13.621c-6.731-8.602-10.667-18.844-11.382-29.619c-0.37-5.572,0.13-11.175,1.488-16.653
				c5.193-20.958,17.402-39.912,34.378-53.371c1.369-1.086,2.8-2.159,4.258-3.192c-5.727-6.34-10.315-13.544-13.646-21.421
				c-3.999-9.456-6.027-19.474-6.027-29.777s2.028-20.321,6.027-29.776c3.853-9.111,9.361-17.284,16.369-24.292
				c7.008-7.007,15.181-12.515,24.292-16.368c9.453-3.999,19.472-6.027,29.775-6.027c10.305,0,20.323,2.028,29.776,6.027
				c9.11,3.853,17.283,9.36,24.291,16.368c7.009,7.009,12.517,15.182,16.37,24.292c0.88,2.083,1.686,4.259,2.395,6.469
				c2.41,7.515,3.632,15.357,3.632,23.308c0,7.948-1.222,15.79-3.632,23.308c-0.71,2.212-1.516,4.389-2.396,6.469
				c-3.332,7.878-7.922,15.082-13.646,21.421c1.452,1.029,2.883,2.101,4.258,3.191c4.154,3.293,8.083,6.972,11.677,10.934
				c10.967,12.087,18.816,26.762,22.702,42.438c4.021,16.233,0.414,33.099-9.896,46.272c-1.538,1.966-3.246,3.856-5.078,5.62
				c-2.395,2.305-5.026,4.408-7.822,6.252c-0.939,0.618-1.893,1.207-2.836,1.749c-0.862,0.494-1.743,0.968-2.616,1.406
				C428.697,403.995,420.315,405.976,411.933,405.976z M368.994,155.725c-10.169,0-20.057,2.001-29.387,5.948
				c-8.991,3.803-17.058,9.238-23.974,16.154c-6.916,6.917-12.352,14.982-16.155,23.974c-3.947,9.332-5.948,19.219-5.948,29.387
				c0,10.168,2.001,20.056,5.948,29.387c3.36,7.946,8.018,15.198,13.844,21.555l0.386,0.42l-0.467,0.327
				c-1.603,1.122-3.176,2.294-4.675,3.483c-16.804,13.322-28.888,32.083-34.028,52.828c-1.333,5.378-1.824,10.878-1.46,16.347
				c0.702,10.574,4.565,20.627,11.171,29.068c4.188,5.353,9.53,9.976,15.448,13.371c0.85,0.487,1.713,0.951,2.567,1.379
				c7.335,3.679,15.562,5.623,23.79,5.623h85.877c8.229,0,16.455-1.944,23.792-5.623c0.856-0.43,1.721-0.894,2.566-1.379
				c0.925-0.532,1.862-1.109,2.784-1.717c2.744-1.81,5.327-3.875,7.679-6.138c1.798-1.73,3.475-3.587,4.984-5.516
				c10.118-12.931,13.658-29.483,9.712-45.416c-3.846-15.516-11.616-30.041-22.472-42.006c-3.558-3.921-7.446-7.562-11.558-10.822
				c-1.506-1.193-3.079-2.365-4.675-3.482l-0.467-0.327l0.386-0.42c5.825-6.356,10.483-13.608,13.844-21.555
				c0.869-2.053,1.664-4.201,2.364-6.385c2.379-7.418,3.585-15.157,3.585-23.002c0-7.847-1.206-15.586-3.585-23.002
				c-0.699-2.182-1.494-4.33-2.363-6.385c-3.802-8.99-9.237-17.057-16.155-23.974c-6.916-6.917-14.982-12.352-23.973-16.154
				C389.052,157.726,379.164,155.725,368.994,155.725z M411.933,363.136h-85.877c-4.704,0-8.949-2.973-10.564-7.396
				c-0.759-2.081-0.877-4.324-0.341-6.487c6.14-24.779,28.281-42.085,53.844-42.085s47.704,17.306,53.844,42.085
				c0.536,2.16,0.418,4.403-0.342,6.486C420.881,360.164,416.636,363.136,411.933,363.136z M368.994,308.167
				c-25.102,0-46.844,16.993-52.873,41.325c-0.488,1.97-0.381,4.011,0.31,5.904c1.472,4.03,5.34,6.739,9.625,6.739h85.877
				c4.285,0,8.152-2.709,9.624-6.74c0.691-1.895,0.799-3.937,0.311-5.903C415.838,325.161,394.096,308.167,368.994,308.167z
				 M368.994,264.811c-18.54,0-33.624-15.083-33.624-33.623s15.084-33.623,33.624-33.623s33.623,15.083,33.623,33.623
				S387.534,264.811,368.994,264.811z M368.994,198.564c-17.989,0-32.624,14.635-32.624,32.623s14.635,32.623,32.624,32.623
				c17.988,0,32.623-14.635,32.623-32.623S386.982,198.564,368.994,198.564z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">
                사용자 관리
              </span>
            </a>
          </Link>
          <Link href="/management/reports">
            <a className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-400 text-white">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path d="m256,330.8c-60.8,0-108.5,37.2-108.5,84.7 0,11.3 9.1,20.4 20.4,20.4s20.4-9.1 20.4-20.4c0-23.8 31-43.9 67.6-43.9 36.7,0 67.6,20.1 67.6,43.9 0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4 0.2-47.5-47.5-84.7-108.3-84.7z" />
                      <path d="m256,302.4c32.8,0 59.4-26.2 59.4-58.5 0-32.3-26.7-58.5-59.4-58.5-32.8,0-59.4,26.2-59.4,58.5 2.84217e-14,32.3 26.6,58.5 59.4,58.5zm0-76.1c10.3,0 18.6,7.9 18.6,17.7 0,9.7-8.3,17.6-18.6,17.6s-18.6-7.9-18.6-17.6c0-9.8 8.3-17.7 18.6-17.7z" />
                      <path d="m417.8,41.7h-141.4v-10.3c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v10.3h-141.4c-28.1,0-51,22.9-51,51v357.3c0,28.1 22.9,51 51,51h323.5c28.1,0 51-22.9 51-51v-357.3c0.1-28.1-22.8-51-50.9-51zm-68.4,40.8l-14.6,28.9h-157.5l-14.6-28.9h186.7zm78.6,367.5c0,5.6-4.6,10.2-10.2,10.2h-323.6c-5.6,0-10.2-4.6-10.2-10.2v-357.3c0-5.6 4.6-10.2 10.2-10.2h22.6l29.6,58.5c3.5,6.9 10.5,11.2 18.2,11.2h182.6c7.7,0 14.7-4.3 18.2-11.2l29.6-58.5h22.6c5.6,0 10.2,4.6 10.2,10.2v357.3z" />
                    </g>
                  </g>
                </svg>
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">
                신고 관리
              </span>
            </a>
          </Link>
        </div>
      )}
      <div className="flex flex-col space-y-5 divide-y">
        {data
          ? data?.products?.map((product) => (
              <Item
                id={product.id}
                key={product.id}
                title={product.name}
                price={product.price}
                hearts={product._count?.favs || 0}
              />
            ))
          : "Loading..."}
        <FloatingButton href="/products/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

const Page: NextPage<{ products: ProductWithCount[] }> = ({ products }) => {
  return (
    <SWRConfig
      value={{
        fallback: {
          "/api/products": {
            ok: true,
            products,
          },
        },
      }}
    >
      <Home />
    </SWRConfig>
  );
};

export async function getServerSideProps() {
  const products = await client.product.findMany({});
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default Page;
