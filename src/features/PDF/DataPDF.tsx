import { Page, Text, Image, View, Document, StyleSheet } from "@react-pdf/renderer"
import Logo from "../../assets/img/Jobbix.png"

const styles = StyleSheet.create({
  page: {
    width: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  section: {
    backgroundColor: '#E4E4E4',
    borderRadius: "10px",
    padding: "20px",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "16px"
  },
  texto: {
    fontWeight: "bold",
    color: "#7b4b02",
    fontSize: "15px"
  },
  info: {
    fontWeight: "light",
    fontSize: "13px"
  }
})

const DataPDF = (props: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={{ marginTop: "20px", textAlign: "center", width: "100%"}}>Comprobante de Pago</Text>
        <Image src={Logo} style={{ width: "50%", marginLeft: "65px"}} />

        <Text style={styles.texto}>Nombre de Usuario: </Text>
        <Text style={styles.info}>{props.nombre} {props.apellido}</Text>
        <Text style={styles.texto}>Categoría: </Text>
        <Text style={styles.info}>Plomería</Text>
        <Text style={styles.texto}>Contrató a: </Text>
        <Text style={styles.info}>Mauricio Aguilar</Text>
        <Text style={styles.texto}>Fecha: </Text>
        <Text style={styles.info}>Lunes - 8pm</Text>
        <Text style={styles.texto}>Método de pago: </Text>
        <Text style={styles.info}>Tarjeta de crédito</Text>
        <Text style={styles.texto}>Pagó:</Text>
        <Text style={styles.info}>USD $50</Text>
        <Text style={styles.texto}>N° de transacción: </Text>
        <Text style={styles.info}>182567-P</Text>
        <Text style={{ marginTop: "20px", textAlign: "center", width: "100%"}}>¡Gracias por preferirnos!</Text>
      </View>
    </Page>
  </Document>
)

export default DataPDF
