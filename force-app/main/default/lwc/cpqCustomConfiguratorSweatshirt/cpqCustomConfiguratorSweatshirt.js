import { LightningElement,api } from 'lwc';

export default class CpqCustomConfiguratorSweatshirt extends LightningElement {
    className = 'slds-col';
    @api configData
    ready = false;
    selectedItems = [];
    index = 1;
    sweatshirts = [
        {
            Id: '001',
            Name: 'White Sweatshirt',
            Description: 'VP of Engineering',
            Material: '4152568563',
            Category: '4152568563',
            Price: '$200',
            PriceNum: 200,
            pictureUrl: 'https://bluvium-8d-dev-ed.develop.file.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Jpg&versionId=0685h00000IjsPz&operationContext=DELIVERY&contentId=05T5h00000rg720&page=0&d=/a/5h0000004xBg/3ItbEXD3WpYq3dim0BUkLlZryRxtwWzQ1G5_O7mmAVE&oid=00D5h0000084xp1&dpt=null&viewId=',
            isSelected: false
        },
        {
            Id: '002',
            Name: 'Multi Colour Grey Sweatshirt',
            Description: 'VP of Engineering',
            Material: '4152568563',
            Category: '4152568563',
            Price: '$130',
            PriceNum: 130,
            pictureUrl: 'https://bluvium-8d-dev-ed.develop.file.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Png&versionId=0685h00000IjsR2&operationContext=DELIVERY&contentId=05T5h00000rg71v&page=0&d=/a/5h0000004xBl/P61NyOUTtKxk_ppp4sNpwhsrEsNN3AIebbvN1di.3ws&oid=00D5h0000084xp1&dpt=null&viewId=',
            isSelected: false
        },
        {
            Id: '003',
            Name: 'Black Sweatshirt',
            Description: 'VP of Engineering',
            Material: '4152568563',
            Category: '4152568563',
            Price: '$50',
            PriceNum: 50,
            pictureUrl: 'https://bluvium-8d-dev-ed.develop.file.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Jpg&versionId=0685h00000IjsR7&operationContext=DELIVERY&contentId=05T5h00000rg71q&page=0&d=/a/5h0000004xBq/Jv0ilqAY2qIAuqqUNO_N3fxM2ZezoKZXby2pDUhaoOM&oid=00D5h0000084xp1&dpt=null&viewId=',
            isSelected: false
        },
        {
            Id: '004',
            Name: 'Pink Sweatshirt',
            Description: 'VP of Engineering',
            Material: '4152568563',
            Category: '4152568563',
            Price: '$100',
            PriceNum: 100,
            pictureUrl: 'https://bluvium-8d-dev-ed.develop.file.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Jpg&versionId=0685h00000IjsR6&operationContext=DELIVERY&contentId=05T5h00000rg71l&page=0&d=/a/5h0000004xBv/pp0CXlcq0fCZ4DYc1i8Jk6oe5Yl4hMxxR.pJjqvVAqo&oid=00D5h0000084xp1&dpt=null&viewId=',
            isSelected: false
        },
        {
            Id: '005',
            Name: 'White Sweatshirt back',
            Description: 'VP of Engineering',
            Material: '4152568563',
            Category: '4152568563',
            Price: '$79',
            PriceNum: 79,
            pictureUrl: 'https://bluvium-8d-dev-ed.develop.file.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Jpg&versionId=0685h00000IjsR1&operationContext=DELIVERY&contentId=05T5h00000rg71g&page=0&d=/a/5h0000004xC0/woVUp3y9YLaAhUHJO9RpLj_uyrHi_eeo0285AP18zYw&oid=00D5h0000084xp1&dpt=null&viewId=',
            isSelected: false
        },
        {
            Id: '006',
            Name: 'Grey Sweatshirt',
            Description: 'VP of Engineering',
            Material: '4152568563',
            Category: '4152568563',
            Price: '$80',
            PriceNum: 80,
            pictureUrl: 'https://bluvium-8d-dev-ed.develop.file.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Jpg&versionId=0685h00000IjsQx&operationContext=DELIVERY&contentId=05T5h00000rg71b&page=0&d=/a/5h0000004xC5/OhN.bJaqB1rRolnio7VxkK1DU59W3I0Dd6ATzsDGiNg&oid=00D5h0000084xp1&dpt=null&viewId=',
            isSelected: false
        },
        {
            Id: '007',
            Name: 'Green Hoodie',
            Description: 'VP of Engineering',
            Material: '4152568563',
            Category: '4152568563',
            Price: '$250',
            PriceNum: 250,
            pictureUrl: 'https://bluvium-8d-dev-ed.develop.file.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Jpg&versionId=0685h00000IjsQw&operationContext=DELIVERY&contentId=05T5h00000rg71R&page=0&d=/a/5h0000004xBw/uGLL4pd4iS04YNqa79OJTLx2qpoUdlY10LN6S4NVXGk&oid=00D5h0000084xp1&dpt=null&viewId=',
            isSelected: false
        },
        {
            Id: '008',
            Name: 'Multi Colour White Sweatshirt',
            Description: 'VP of Engineering',
            Material: '4152568563',
            Category: '4152568563',
            Price: '$140',
            PriceNum: 140,
            pictureUrl: 'https://bluvium-8d-dev-ed.develop.file.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Jpg&versionId=0685h00000IjYsH&operationContext=DELIVERY&contentId=05T5h00000qVqQk&page=0&d=/a/5h0000004wnS/aHrIgMooFhLUcERiD0snWwmu1bqV_RPW9xBMkBrXvJA&oid=00D5h0000084xp1&dpt=null&viewId=',
            isSelected: false
        }
    ];

    connectedCallback() {
        setTimeout(() => {
            this.ready = true;
            let obj = JSON.parse(this.configData);
            console.log(obj);
            
            obj.product.optionConfigurations["Sweatshirt Type"].forEach(element =>  {
                if(element.readOnly && element.readOnly.line && element.readOnly.line.Sweatshirt_Pattern__c) {
                    // let item = this.sweatshirts.find(o => o.Name === element.readOnly.line.Sweatshirt_Pattern__c);
                    let itemIndex = this.sweatshirts.findIndex(o => o.Name === element.readOnly.line.Sweatshirt_Pattern__c);
                    this.sweatshirts[itemIndex].isSelected = true;
                }

            });
            this.index = obj.product.optionConfigurations["Sweatshirt Type"][obj.product.optionConfigurations["Sweatshirt Type"].length - 1].index;
        }, 3000);
    }

    handleClick(event) {
        console.log(event.target);
        let currentSweatshirt = this.sweatshirts.find(o => o.Name === event.target.innerHTML);
        let currentSweatshirtIndex = this.sweatshirts.findIndex(o => o.Name === event.target.innerHTML);

        let changedItems = this.sweatshirts;
        changedItems[currentSweatshirtIndex].isSelected = true;
        this.sweatshirts = [];
        this.sweatshirts = changedItems;

        this.index++;
        let option = {
            optionId:"a0i5h000004zwZ5AAI",
            selected:true,
            ProductName:"Sweatshirt",
            Quantity:1,
            configurationData:{
                Sweatshirt_Pattern__c: event.target.innerHTML,
                Price__c: currentSweatshirt.PriceNum,
                SBQQ__UnitPrice__c: currentSweatshirt.PriceNum
            },
            index:this.index,
            readOnly:{}
        };
        this.selectedItems.push(option);
        console.log(this.sweatshirts);
    }

    handleSave(event) {
        console.log(event.target);
        
        let obj = JSON.parse(this.configData);
        console.log(obj);        
        console.log(this.selectedItems);

        obj.product.optionConfigurations["Sweatshirt Type"] = this.selectedItems;
        let configData = JSON.stringify(obj);
        let configChangeEvent = new CustomEvent('config_change', {
            detail:  configData,
            bubbles: true,
            composed: true
        });
        // Fire the custom event
        this.dispatchEvent(configChangeEvent);
    }

}