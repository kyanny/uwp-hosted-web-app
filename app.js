if (typeof Windows !== "undefined") {
    var button = document.querySelector('button');
    button.addEventListener('click', function() {
        var notifications = Windows.UI.Notifications;
        var template = notifications.ToastTemplateType.toastImageAndText01;
        var toastXml = notifications.ToastNotificationManager.getTemplateContent(template);
        var toastTextElements = toastXml.getElementsByTagName("text");
        toastTextElements[0].appendChild(toastXml.createTextNode("Toast from Codepen"));
        var toastImageElements = toastXml.getElementsByTagName("image");
        toastImageElements[0].setAttribute("src", "https://assets.codepen.io/assets/social/facebook-default.png");
        toastImageElements[0].setAttribute("alt", "red graphic");
        var toast = new notifications.ToastNotification(toastXml);
        var toastNotifier = notifications.ToastNotificationManager.createToastNotifier();
        toastNotifier.show(toast);
    });
    button.removeAttribute('disabled');
    console.log('hello');
} else {
    console.log('sorry');
}
