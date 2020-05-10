describe('Typescript Banking Example', function () {
    it('can log in a closed loop', function () {
        var date = new Date('2010-11-11T05:00:00.000Z');
        var output = '';
        var sam = clientController.sam;
        var oldSendToLog = sam.amorphic.logger;
        sam.amorphic.logger.sendToLog = function sendToLog(level, obj) {
            var str = sam.amorphic.logger.prettyPrint(level, obj).replace(/.*: /, '');
            output += str.replace(/[\r\n ]/g, '');
        };
        sam.amorphic.logger.startContext({ name: 'supertype' });
        sam.amorphic.logger.warn({ foo: 'bar1' }, 'Yippie');
        var context = sam.amorphic.logger.setContextProps({ permFoo: 'permBar1' });
        sam.amorphic.logger.warn({ foo: 'bar2' });
        sam.amorphic.logger.clearContextProps(context);
        sam.amorphic.logger.warn({ foo: 'bar3' });
        var child = sam.amorphic.logger.createChildLogger({ name: 'supertype_child' });
        child.setContextProps({ permFoo: 'childFoo' });
        child.warn({ foo: 'bar4' });
        sam.amorphic.logger.warn({ foo: 'bar5' });
        sam.amorphic.logger.startContext({ name: 'supertype2' });
        sam.amorphic.logger.warn({ foo: 'bar6', woopie: { yea: true, oh: date } }, 'hot dog');
        sam.amorphic.logger.setLevel('error');
        console.log('setting level to error');
        sam.amorphic.logger.warn({ foo: 'bar6', woopie: { yea: true, oh: date } }, 'hot dog');
        sam.amorphic.logger.setLevel('error;foo:bar6');
        sam.amorphic.logger.warn({ foo: 'bar6', woopie: { yea: true, oh: date } }, 'hot dog');
        sam.amorphic.logger.setLevel('error;foo:bar7');
        sam.amorphic.logger.warn({ foo: 'bar6', woopie: { yea: true, oh: date } }, 'hot dog');
        console.log(output);
        var result = '(__amorphicContext={"name":"supertype"}foo="bar1")(__amorphicContext={"name":"supertype","permFoo":"permBar1"}permFoo="permBar1"foo="bar2")(__amorphicContext={"name":"supertype"}foo="bar3")(__amorphicContext={"name":"supertype","permFoo":"childFoo"}permFoo="childFoo"foo="bar4")(__amorphicContext={"name":"supertype"}foo="bar5")(__amorphicContext={"name":"supertype2"}foo="bar6"woopie={"yea":true,"oh":"2010-11-11T05:00:00.000Z"})(__amorphicContext={"name":"supertype2"}foo="bar6"woopie={"yea":true,"oh":"2010-11-11T05:00:00.000Z"})';
        expect(output).to.equal(result);
        sam.amorphic.logger = oldSendToLog;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vtb3R1cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbW90dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3RDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRTtRQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ2hELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUFJLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7UUFDL0IsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFdkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHO1lBQzVELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxRSxNQUFNLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBRUYsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7UUFDdEQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQ3pFLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDLENBQUMsQ0FBQztRQUM3RSxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZELEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDLEVBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDLEVBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBQyxFQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEYsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUMsRUFBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRWxGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxNQUFNLEdBQ1Qsc2hCQUFzaEIsQ0FBQztRQUV4aEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmRlc2NyaWJlKCdUeXBlc2NyaXB0IEJhbmtpbmcgRXhhbXBsZScsIGZ1bmN0aW9uICgpIHtcblx0aXQoJ2NhbiBsb2cgaW4gYSBjbG9zZWQgbG9vcCcsIGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgZGF0ZSA9IG5ldyBEYXRlKCcyMDEwLTExLTExVDA1OjAwOjAwLjAwMFonKTtcblx0XHR2YXIgb3V0cHV0ID0gJyc7XG5cblx0XHR2YXIgc2FtID0gY2xpZW50Q29udHJvbGxlci5zYW07XG5cdFx0dmFyIG9sZFNlbmRUb0xvZyA9IHNhbS5hbW9ycGhpYy5sb2dnZXI7XG5cblx0XHRzYW0uYW1vcnBoaWMubG9nZ2VyLnNlbmRUb0xvZyA9IGZ1bmN0aW9uIHNlbmRUb0xvZyhsZXZlbCwgb2JqKSB7XG5cdFx0XHR2YXIgc3RyID0gc2FtLmFtb3JwaGljLmxvZ2dlci5wcmV0dHlQcmludChsZXZlbCwgb2JqKS5yZXBsYWNlKC8uKjogLywgJycpO1xuXHRcdFx0b3V0cHV0ICs9IHN0ci5yZXBsYWNlKC9bXFxyXFxuIF0vZywgJycpO1xuXHRcdH07XG5cblx0XHRzYW0uYW1vcnBoaWMubG9nZ2VyLnN0YXJ0Q29udGV4dCh7bmFtZTogJ3N1cGVydHlwZSd9KTtcblx0XHRzYW0uYW1vcnBoaWMubG9nZ2VyLndhcm4oe2ZvbzogJ2JhcjEnfSwgJ1lpcHBpZScpO1xuXHRcdHZhciBjb250ZXh0ID0gc2FtLmFtb3JwaGljLmxvZ2dlci5zZXRDb250ZXh0UHJvcHMoe3Blcm1Gb286ICdwZXJtQmFyMSd9KTtcblx0XHRzYW0uYW1vcnBoaWMubG9nZ2VyLndhcm4oe2ZvbzogJ2JhcjInfSk7XG5cdFx0c2FtLmFtb3JwaGljLmxvZ2dlci5jbGVhckNvbnRleHRQcm9wcyhjb250ZXh0KTtcblx0XHRzYW0uYW1vcnBoaWMubG9nZ2VyLndhcm4oe2ZvbzogJ2JhcjMnfSk7XG5cdFx0dmFyIGNoaWxkID0gc2FtLmFtb3JwaGljLmxvZ2dlci5jcmVhdGVDaGlsZExvZ2dlcih7bmFtZTogJ3N1cGVydHlwZV9jaGlsZCd9KTtcblx0XHRjaGlsZC5zZXRDb250ZXh0UHJvcHMoe3Blcm1Gb286ICdjaGlsZEZvbyd9KTtcblx0XHRjaGlsZC53YXJuKHtmb286ICdiYXI0J30pO1xuXHRcdHNhbS5hbW9ycGhpYy5sb2dnZXIud2Fybih7Zm9vOiAnYmFyNSd9KTtcblx0XHRzYW0uYW1vcnBoaWMubG9nZ2VyLnN0YXJ0Q29udGV4dCh7bmFtZTogJ3N1cGVydHlwZTInfSk7XG5cdFx0c2FtLmFtb3JwaGljLmxvZ2dlci53YXJuKHtmb286ICdiYXI2Jywgd29vcGllOiB7eWVhOiB0cnVlLCBvaDogZGF0ZX19LCAnaG90IGRvZycpO1xuXHRcdHNhbS5hbW9ycGhpYy5sb2dnZXIuc2V0TGV2ZWwoJ2Vycm9yJyk7XG5cdFx0Y29uc29sZS5sb2coJ3NldHRpbmcgbGV2ZWwgdG8gZXJyb3InKTtcblx0XHRzYW0uYW1vcnBoaWMubG9nZ2VyLndhcm4oe2ZvbzogJ2JhcjYnLCB3b29waWU6IHt5ZWE6IHRydWUsIG9oOiBkYXRlfX0sICdob3QgZG9nJyk7XG5cdFx0c2FtLmFtb3JwaGljLmxvZ2dlci5zZXRMZXZlbCgnZXJyb3I7Zm9vOmJhcjYnKTtcblx0XHRzYW0uYW1vcnBoaWMubG9nZ2VyLndhcm4oe2ZvbzogJ2JhcjYnLCB3b29waWU6IHt5ZWE6IHRydWUsIG9oOiBkYXRlfX0sICdob3QgZG9nJyk7XG5cdFx0c2FtLmFtb3JwaGljLmxvZ2dlci5zZXRMZXZlbCgnZXJyb3I7Zm9vOmJhcjcnKTtcblx0XHRzYW0uYW1vcnBoaWMubG9nZ2VyLndhcm4oe2ZvbzogJ2JhcjYnLCB3b29waWU6IHt5ZWE6IHRydWUsIG9oOiBkYXRlfX0sICdob3QgZG9nJyk7XG5cblx0XHRjb25zb2xlLmxvZyhvdXRwdXQpO1xuXHRcdHZhciByZXN1bHQgPVxuXHRcdFx0JyhfX2Ftb3JwaGljQ29udGV4dD17XCJuYW1lXCI6XCJzdXBlcnR5cGVcIn1mb289XCJiYXIxXCIpKF9fYW1vcnBoaWNDb250ZXh0PXtcIm5hbWVcIjpcInN1cGVydHlwZVwiLFwicGVybUZvb1wiOlwicGVybUJhcjFcIn1wZXJtRm9vPVwicGVybUJhcjFcImZvbz1cImJhcjJcIikoX19hbW9ycGhpY0NvbnRleHQ9e1wibmFtZVwiOlwic3VwZXJ0eXBlXCJ9Zm9vPVwiYmFyM1wiKShfX2Ftb3JwaGljQ29udGV4dD17XCJuYW1lXCI6XCJzdXBlcnR5cGVcIixcInBlcm1Gb29cIjpcImNoaWxkRm9vXCJ9cGVybUZvbz1cImNoaWxkRm9vXCJmb289XCJiYXI0XCIpKF9fYW1vcnBoaWNDb250ZXh0PXtcIm5hbWVcIjpcInN1cGVydHlwZVwifWZvbz1cImJhcjVcIikoX19hbW9ycGhpY0NvbnRleHQ9e1wibmFtZVwiOlwic3VwZXJ0eXBlMlwifWZvbz1cImJhcjZcIndvb3BpZT17XCJ5ZWFcIjp0cnVlLFwib2hcIjpcIjIwMTAtMTEtMTFUMDU6MDA6MDAuMDAwWlwifSkoX19hbW9ycGhpY0NvbnRleHQ9e1wibmFtZVwiOlwic3VwZXJ0eXBlMlwifWZvbz1cImJhcjZcIndvb3BpZT17XCJ5ZWFcIjp0cnVlLFwib2hcIjpcIjIwMTAtMTEtMTFUMDU6MDA6MDAuMDAwWlwifSknO1xuXG5cdFx0ZXhwZWN0KG91dHB1dCkudG8uZXF1YWwocmVzdWx0KTtcblx0XHRzYW0uYW1vcnBoaWMubG9nZ2VyID0gb2xkU2VuZFRvTG9nO1xuXHR9KTtcbn0pO1xuIl19