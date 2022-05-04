import { InputEnum, setOutputValues, setPaymentResponse } from '../../src/core/services/banks/dto/scotiabank/helpers';
import { IScotiabankPaymentResponseDTO } from '../../src/core/services/banks/dto/scotiabank/scotiabank.responses.dto';

describe('output payment', () => {
	it('Should return something', () => {
		const valueJson = {
			'TIPO IDENTIF. MENSAJE': '0200',
			'BIT PRIMARIO': 'F220848188E08000',
			'BIT SECUNDARIO': '0000000000000018',
			'NUMERO DE TARJETA': '160000000000000000',
			'CODIGO DE PROCESO': '945000',
			MONTO: '000000000253',
			'FECHA Y HORA DE TRANSACCION': '0502011000',
			TRACE: '024349',
			'FECHA DE CAPTURA': '0125',
			'MODO DE INGRESO DE DATOS': '000',
			CANAL: '90',
			'BIN ADQUIRIENTE': '06520900',
			'FORWARD INSTITUTION CODE': '06520900',
			'RETRIEVAL REFERENCE NUMBER': '000000219191',
			'TERMINAL ID': '0056    ',
			COMERCIO: '000000000000000',
			'CARD ACCEPTOR LOCATION': 'DISEÑO Y DESARROLLO PROD GTB            ',
			'TRANSACTION CURRENCY CODE': '840',
			'DATOS RESERVADOS': '00220',
			'DATOS DEL REQUERIMIENTO': '',
			'LONGITUD DE LA TRAMA': '468',
			'CODIGO DE FORMATO': '01',
			'BIN PROCESADOR': '000000     ',
			'CODIGO DE ACREEDOR': '000000     ',
			'CODIGO DE PRODUCTO': 'REC     ',
			'CODIGO DE PLAZA DEL RECAUDADOR': '0000',
			'CODIGO DE AGENCIA DEL RECAUDADOR': '890 ',
			'TIPO DE DATO DE PAGO': '01',
			'DATO DE PAGO': '20131368152          ',
			'CODIGO DE CIUDAD': '890',
			'NUMERO DE PROD/SERV PAGADO': '01',
			'NUMERO TOTAL DE DOC PAGADO': '001',
			'FILLER 1': '          ',
			'MEDIO DE PAGO': '00',
			'IMPORTE PAGADO EFECTIVO': '00000000253',
			'IMPORTE PAG.C.CTA': '00000000000',
			'NRO CHEQUE 1': '               ',
			'BCO GIRADOR 1': '   ',
			'IMPORTE CHEQUE 1': '00000000000',
			'PLAZA CHEQUE 1': ' ',
			'NRO CHEQUE 2': '               ',
			'BCO GIRADOR 2': '   ',
			'IMPORTE CHEQUE 2': '00000000000',
			'PLAZA CHEQUE 2': ' ',
			'NRO CHEQUE 3': '               ',
			'BCO GIRADOR 3': '   ',
			'IMPORTE CHEQUE 3': '00000000000',
			'PLAZA CHEQUE 3': ' ',
			'MONEDA DE PAGO': '840',
			'TIPO DE CAMBIO APLICADO': '00000000000',
			'PAGO TOTAL REALIZADO': '00000000253',
			'FILLER 2': '          ',
			'CODIGO DE SERVICIO PAGADO': '001',
			'ESTADO DEL DEUDOR': 'V ',
			'IMPORTE TOTAL X PROD/SERV': '00000000253',
			'NRO DE CUENTA DE ABONO': '                   ',
			'NRO DE REFERENCIA DEL ABONO': '000000001111',
			'NRO DE DOCUMENTOS PAGADOS': '01',
			'FILLER 3': '          ',
			'TIPO DE DOCUMENTO DE PAGO': '001',
			'NUMERO DE DOCUMENTO DE PAG': 'PED-01-8102',
			'PERIODO DE COTIZACION': '26    ',
			'TIPO DOC ID. DEUDOR': '  ',
			'NUMERO DOC ID DEL DEUDOR': '               ',
			'IMPORTE ORIGINAL DE LA DEUDA': '00000000253',
			'IMPORTE PAGADO DEL DOCUMENTO': '00000000253',
			'CODIGO DE CONCEPTO 1': '07',
			'IMPORTE DE CONCEPTO 1': '00000000253',
			'CODIGO DE CONCEPTO 2': '00',
			'IMPORTE DE CONCEPTO 2': '00000000000',
			'CODIGO DE CONCEPTO 3': '00',
			'IMPORTE DE CONCEPTO 3': '00000000000',
			'CODIGO DE CONCEPTO 4': '00',
			'IMPORTE DE CONCEPTO 4': '00000000000',
			'CODIGO DE CONCEPTO 5': '00',
			'IMPORTE DE CONCEPTO 5': '00000000000',
			'REFERENCIA DE LA DEUDA': '12345678912     ',
			FILLER: 'PRUEBA02                         .',
		};
		const responseMyMAPI = {
			operationNumberCompany: '48',
			transactionDate: '',
			clientName: '',
			clientIdentificacion: '',
			description: '',
		};
		const result: IScotiabankPaymentResponseDTO = setPaymentResponse(valueJson, responseMyMAPI);
		const stringResult = setOutputValues(result, InputEnum.PAYMENT);
		console.log('🚀 ~ test ~ stringResult', stringResult);
		expect(stringResult).toBe(
			'0210F220848188E08000000000000000001894500000000000025305020110000243490125065209000000002191914     000056    84000220   01000000     000000     REC     0000890 0120131368152          8904           48          01001          0000TRANSACCION PROCESADA OK                                                                                  001RECAUDACION DOL00000000253RECAUDACION DOLARES                                                             01                    001Recibo de ServiPED-01-8102                            00000000        00000000253010000000025300000000000000000000000000000000000000000000000000000           12345678912                                       ',
		);
		expect(stringResult).toHaveLength(678);
	});
});
