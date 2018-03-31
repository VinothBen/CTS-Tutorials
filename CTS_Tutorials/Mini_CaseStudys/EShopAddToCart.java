import java.util.logging.Logger;

/* Class designed for requirement 1, add code wherever applicable as per requirement given */
class OrderDetails
{
	private static final Logger LOG = Logger.getLogger("OrderDetails");

	//member variables
	String itemName;
	float itemCost;
	int quantity;
	public OrderDetails(String itemName, float itemCost, int quantity) {
		super();
		this.itemName = itemName;
		this.itemCost = itemCost;
		this.quantity = quantity;
	}
	
 void printMessage(int quantity){
	switch(quantity)
	{
	case 1:
	  LOG.info("You have selected one item."); break;
	case 2:
		LOG.info("You have selected two items. "); break;
	default :
		LOG.info("You have not selected any item.");break;
}
 }
}

/* Class designed for requirement 2, add code wherever applicable as per requirement given */
public class EShopAddToCart {

	private static final Logger LOG = Logger.getLogger("EShopAddToCart");
	double totalPurchasAmount=0;
	float discount=0;
double calculateSum(OrderDetails[] OrderDetailsObject){
	
for(int i=0;i<OrderDetailsObject.length;i++){
	totalPurchasAmount+=OrderDetailsObject[i].itemCost * OrderDetailsObject[i].quantity;
}
return totalPurchasAmount;
}


float calculateDiscount(double totalPurchaseAmount){
   
    if(totalPurchaseAmount<1000)
    {
    	discount=(float) ((totalPurchaseAmount * 10)/100);
    }
    else if(totalPurchaseAmount>1000 && totalPurchaseAmount<10000){
    	discount=(float) ((totalPurchaseAmount * 20)/100);
    }
    else if(totalPurchaseAmount>10000){
    	discount=(float) ((totalPurchaseAmount * 30)/100);

    }
	return discount;
}
}


	
	



