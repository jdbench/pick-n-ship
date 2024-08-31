import { useLoaderData } from "@remix-run/react";

export async function loader({
  params
}) {
  return params.building;
}

export default function Locations() {
  const building = useLoaderData();
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <EmptyState
              heading="Manage locations"
              action={{ content: "Add Location" }}
            >
              <p>Add a storage location to {building}</p>
            </EmptyState>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
