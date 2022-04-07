import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BankScotiabankUseCase } from 'src/core/services/banks';
import { prepareXml } from 'src/core/services/banks/helpers/scotiabank';

@Controller('/api/scotiabank')
@ApiTags('ScotiabankController')
export class ScotiabankController {
	constructor(private readonly bankScotiabankUseCase: BankScotiabankUseCase) {}

	@Post('v1')
	async consultDebt(@Body() XML: any, @Res() res) {
		const xmlStr = Buffer.from(XML).toString();
		const result = await this.bankScotiabankUseCase.redirector(xmlStr);
		res.set({ 'Content-Type': 'application/xml' });
		res.send(prepareXml(result));
	}
}
