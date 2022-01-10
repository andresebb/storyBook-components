import './myLabel.css'

interface MyLabelProps {
  /**
   * The name of your label
   */
  label?: string;
  /**
   * Este es el tamano de la etiqueta
   */
  size?: "normal" | "h1" | "h2" | "h3"

  /**
   * Define si la palabra tiene mayus
   */
  allCaps?: boolean

  /**
   *Define el color
  */
  color?: "primary" | "secondary" | "tertiary"
  /**
   *Color personalizado de la fuente
  */
  fontColor: string
}

export const Mylabel = ({
  label = "No Label", size = "normal", allCaps = false, color = "primary", fontColor }: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {
        allCaps ? label.toUpperCase() : label
      }
    </span >
  )
}
