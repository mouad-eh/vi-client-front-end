import * as Yup from "yup";

const FILE_SIZE = 100000
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
                break;
            case "image":
                validationSchema[label.name] = Yup.mixed()
                    .test("fileType", "format d'image non valide.", value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
                    .test("fileSize", "la taille du fichier dépasse 1mo.", value => !value || (value && value.size <= FILE_SIZE))

                break;
            default:
                validationSchema[label.name] = Yup.mixed()
        }
    }
    return { initialValues, validationSchema }
}