import React from "react";

function Footer() {
    return (
        <>
            <div className="footer_content text-[12px] text-gray-500 md:px-[130px] px-[30px] mt-4 
            border-b border-[#d2d2d7] py-8 bg-gray-100">
                <p className="">
                    ◊No Cost EMI is available with the purchase of an eligible product made
                    using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers.
                    Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month
                    tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided
                    by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend
                    applies as per your card issuer’s threshold. No Cost EMI is not available to  business customers
                    and cannot be combined with Apple Store for Education or Corporate Employee Purchase
                    Plan pricing. Card eligibility is subject to terms and conditions between you and your
                    card issuer. Offer may be revised or withdrawn at any time without  any prior notice.
                    Terms apply.
                </p>

                <h1 className="text-[12px] mt-2">
                    Representative example:
                </h1>
                <p className="mt-3">
                    A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a.
                    and No Cost EMI savings of ₹6514.00 requires monthly payments of
                    ₹6658.00. Total amount payable: ₹79900.00.
                </p>
                <p className="mt-4">
                    ‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
                </p>

                <p className="mt-3">
                    *Apple Education Pricing is available to current and newly accepted college students and their parents, as well as teachers and staff at all levels. For more information, visit apple.com/in-edu/store.
                </p>

                <p className="mt-3">
                    1. Qualified Purchasers can receive Promotion Savings when they purchase an eligible Mac or iPad with their choice of a Promotion Product at a Qualifying Location. Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product can be obtained per eligible Mac or iPad per Qualified Purchaser. The offer is subject to availability, while supplies last. View full terms and conditions of offer here.
                </p>

                <p className="mt-3">
                    2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.
                </p>

                <p className="mt-3">
                    Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to the same supported language, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update. Supported languages include English, French, German, Italian, Portuguese (Brazil), Spanish, Japanese, Korean and Chinese (Simplified). More languages are coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
                </p>

                <p className="mt-3">
                    A subscription is required for Apple TV+.
                </p>

                <p className="mt-3">
                    Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
                </p>
            </div>
            <footer className="bg-[#f5f5f7] text-[#6e6e73] text-[12px]">
                <div className="max-w-screen-xl mx-auto px-6 py-8 border-b border-[#d2d2d7]">
                    <p className="mb-4">
                        <span className="font-semibold">◊</span> EMI available on select cards. Terms apply. Representative example:
                        ₹79,900.00 repayable over 24 months at 15.99% p.a. interest = ₹3,912/month. Total ₹93,882.00.
                    </p>
                    <p>
                        * AppleCare+ is subject to terms and availability. Requires purchase with eligible device. See full terms
                        for more details.
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-3 
                md:grid-cols-5 gap-6 text-gray-600">
                    {/* Column 1 */}
                    <div>
                        <h3 className="font-semibold mb-2 text-black">Shop and Learn</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">iPhone</a></li>
                            <li><a href="#" className = "hover:underline">Mac</a></li>
                            <li><a href="#" className = "hover:underline">iPad</a></li>
                            <li><a href="#" className = "hover:underline">Watch</a></li>
                            <li><a href="#" className = "hover:underline">AirPods</a></li>
                            <li><a href="#" className = "hover:underline">Tv & Home</a></li>
                            <li><a href="#" className = "hover:underline">AirTag</a></li>
                            <li><a href="#" className = "hover:underline">Accesceries</a></li>
                            <li><a href="#" className = "hover:underline">Gift Cards</a></li>
                        </ul>
                        <h3 className="font-semibold mt-4 mb-2 text-black">Apple Wallet</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">Wallet</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="font-semibold mb-2 text-black">Account</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">Manage Your Apple Account</a></li>
                            <li><a href="#" className = "hover:underline">Apple Stire Account</a></li>
                            <li><a href="#" className = "hover:underline">iCloud.com</a></li>
                        </ul>
                        <h3 className="font-semibold mt-4 mb-2 text-black">Entertainment</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">Apple One</a></li>
                            <li><a href="#" className = "hover:underline">Apple TV+</a></li>
                            <li><a href="#" className = "hover:underline">Apple MUSIC</a></li>
                            <li><a href="#" className = "hover:underline">Apple Arcade</a></li>
                            <li><a href="#" className = "hover:underline">Apple Podcasts</a></li>
                            <li><a href="#" className = "hover:underline">Apple Books</a></li>
                            <li><a href="#" className = "hover:underline">Apple Store</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="font-semibold mb-2 text-black">Apple Store</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">Find a Store</a></li>
                            <li><a href="#" className = "hover:underline">Genius Bar</a></li>
                            <li><a href="#" className = "hover:underline">Today at Apple</a></li>
                            <li><a href="#" className = "hover:underline">Apple Trade In</a></li>
                            <li><a href="#" className = "hover:underline">Order Status</a></li>
                            <li><a href="#" className = "hover:underline">Group Reservation</a></li>
                            <li><a href="#" className = "hover:underline">Apple Camp</a></li>
                            <li><a href="#" className = "hover:underline">Ways to Buy</a></li>
                            <li><a href="#" className = "hover:underline">Recycling Programme</a></li>
                            <li><a href="#" className = "hover:underline">Shopping Help</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="font-semibold mb-2 text-black">For Business</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">Apple and Business</a></li>
                            <li><a href="#" className = "hover:underline">Shop for Business</a></li>
                        </ul>
                        <h3 className="font-semibold mt-4 mb-2 text-black">For Education</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">Apple And Education</a></li>
                            <li><a href="#" className = "hover:underline">Shop for Education</a></li>
                            <li><a href="#" className = "hover:underline">Shop for University</a></li>
                        </ul>
                        <h3 className="font-semibold mt-4 mb-2 text-black">For Healthcare</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">Apple And Healthcare</a></li>
                            <li><a href="#" className = "hover:underline">Mac in Healthcare</a></li>
                            <li><a href="#" className = "hover:underline">Health on Apple Watch</a></li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div className="hidden md:inline-block">
                        <h3 className="font-semibold mb-2 text-black ">Apple Values</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">Accesibility</a></li>
                            <li><a href="#" className = "hover:underline">Education</a></li>
                            <li><a href="#" className = "hover:underline">Environment</a></li>
                            <li><a href="#" className = "hover:underline">Privacy</a></li>
                            <li><a href="#" className = "hover:underline">Supply chain Innovation</a></li>
                        </ul>
                        <h3 className="font-semibold mt-4 mb-2 text-black">About Apple</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">Newsroom</a></li>
                            <li><a href="#" className = "hover:underline">Apple Leadership</a></li>
                            <li><a href="#" className = "hover:underline">Carrer Opportunites</a></li>
                            <li><a href="#" className = "hover:underline">Investors</a></li>
                            <li><a href="#" className = "hover:underline">Ethics & Compliance</a></li>
                            <li><a href="#" className = "hover:underline">Events</a></li>
                            <li><a href="#" className = "hover:underline">Contact Apple</a></li>
                        </ul>
                    </div>

                    {/* Column 6-mobile */}
                    <div className="md:hidden">
                        <h3 className="font-semibold mb-2 text-black ">Apple Values</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">Accesibility</a></li>
                            <li><a href="#" className = "hover:underline">Education</a></li>
                            <li><a href="#" className = "hover:underline">Environment</a></li>
                            <li><a href="#" className = "hover:underline">Privacy</a></li>
                            <li><a href="#" className = "hover:underline">Supply chain Innovation</a></li>
                        </ul>
                    </div>
                    {/* Column 6-mobile */}
                    <div className=" md:hidden">
                        <h3 className="font-semibold mt-4 mb-2 text-black md:hidden">About Apple</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className = "hover:underline">Newsroom</a></li>
                            <li><a href="#" className = "hover:underline">Apple Leadership</a></li>
                            <li><a href="#" className = "hover:underline">Carrer Opportunites</a></li>
                            <li><a href="#" className = "hover:underline">Investors</a></li>
                            <li><a href="#" className = "hover:underline">Ethics & Compliance</a></li>
                            <li><a href="#" className = "hover:underline">Events</a></li>
                            <li><a href="#" className = "hover:underline">Contact Apple</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Legal Section */}
                <div className="max-w-screen-xl mx-auto px-6 py-6 border-t border-[#d2d2d7] 
                text-xs text-[#6e6e73]">
                    <div className="flex flex-col md:flex-row justify-between">
                        <p className="mb-2 md:mb-0">
                            More ways to shop: 
                            <a href="#" className="underline text-blue-600">Find an Apple Store</a> or
                             <a href="#" className="underline text-blue-600"> Other retailer </a> 
                             near you. Or call <a href = "#" className="underline text-blue-600">
                                000800040 1966.</a>
                        </p>
                        <p>
                            India
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between mt-5 gap-2 md:gap-6 flex-wrap">
                        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className = "hover:underline">Privacy Policy</a>
                            <a href="#" className = "hover:underline">Terms of Use</a>
                            <a href="#" className = "hover:underline">Sales Policy</a>
                            <a href="#" className = "hover:underline">Legal</a>
                            <a href="#" className = "hover:underline">Site Map</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
