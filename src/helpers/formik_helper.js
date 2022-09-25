import * as Yup from "yup";

const FILE_SIZE = 1000000
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]

export function initializeFormik(labels) {
    const initialValues = {}
    const validationSchema = {}
    for (var label of labels) {
        initialValues[label.name] = ""
        switch (label.inputType) {
            case "text":
                validationSchema[label.name] = Yup.string()
                if (label.isRequired) {
                    validationSchema[label.name] = validationSchema[label.name].required("vous avez oublié de remplir ce champ.")
                }
                break
            case "image":
                validationSchema[label.name] = Yup.mixed().
                    test('fileSize', "la taille du photo dépasse 1MB.", value => value.size <= FILE_SIZE).
                    test('fileType', "format de fichier non valable.", value => SUPPORTED_FORMATS.includes(value.type));
                break;
        }
    }
    return { initialValues, validationSchema }
}