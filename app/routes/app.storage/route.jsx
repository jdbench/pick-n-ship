import { Card, EmptyState, Layout, Page } from "@shopify/polaris";

export default function Locations() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <EmptyState
              heading="Manage storage locations"
              action={{ content: "Add Building" }}
            >
              <p>Add a storage location to get started</p>
            </EmptyState>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
