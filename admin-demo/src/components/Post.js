import {
  List,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  ReferenceInput,
  NumberInput,
  AutocompleteInput,
} from "react-admin";

export const PostList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="publishedAt" />
        <ReferenceField source="userId" label="Author" reference="users" />
      </Datagrid>
    </List>
  );
};

export const PostCreate = () => {
  return (
    <Create title="Create a Post">
      <SimpleForm>
        <NumberInput source="id" />
        <ReferenceInput source="userId" reference="users">
          <AutocompleteInput label="Author" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};

export const PostEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput disabled source="id" />
        <ReferenceInput source="userId" reference="users">
          <AutocompleteInput label="Author" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};
