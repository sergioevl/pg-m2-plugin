/*browser:true*/
/*global define*/
define(
    [
        'Magento_Checkout/js/view/payment/default',
        'Magento_Checkout/js/action/redirect-on-success',
        'mage/url'
    ],
    function (Component, redirectOnSuccessAction, url) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Paymentez_PaymentGateway/payment/paymentez_ltp'
            },
            afterPlaceOrder: function () {
                redirectOnSuccessAction.redirectUrl = url.build("redirectlinktopay/placeorder/placeorder");
                this.redirectAfterPlaceOrder = true;
                redirectOnSuccessAction.execute();
            }
        });
    }
);
