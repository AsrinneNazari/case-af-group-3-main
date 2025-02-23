import {
  DigiFormSelect,

  DigiButton,
  DigiIconFileDocument,
} from "@digi/arbetsformedlingen-react";
import { FormSelectVariation, FormSelectValidation, 
  ButtonSize,
  ButtonVariation, } from "@digi/arbetsformedlingen";

export const SavedCompanyExport = () => {
    return <><div className="exportcontainer"><DigiFormSelect
	afLabel="Exportera som"
	afVariation={FormSelectVariation.SMALL} 
	afValidation={FormSelectValidation.NEUTRAL}	 	
	afPlaceholder="Välj filformat"	  
	>
	<option value="excel">Excel-dokument</option>
	<option value="json">JSON</option>
	<option value="csv">CSV</option>
</DigiFormSelect>
<DigiButton
                    afSize={ButtonSize.MEDIUM}
                    afVariation={ButtonVariation.FUNCTION}
                    afFullWidth={false}>
                    <DigiIconFileDocument slot="icon" />
                    Exportera
                  </DigiButton>
                  </div>
                  </>
}